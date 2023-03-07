# Comandos Importantes

Install Home-brew

` /bin/bash -c "$(curl -fsSl https://raw.githubusercontent.com/Homebrew/install/master/install.sh"`


# Git

* inicializar el repositorio

        git init
* Agregar el archivo al repositorio

        git add nombre_de_archivo.extencion

$ git commit -m “Mensaje”// Agregamos 

los cambios para el repositorio
$ git add .// Agregar los cambios de la carpeta en la que nos encontramos agregar todo
$ git status // visualizar cambios
$ git log nombre_de_archivos.extencion //historico de cambios con detalles
$ git push //envia a otro repositorio remoto lo que estamos haciendo
$ git pull //traer repositorio remoto
$ ls //listado de carpetas en donde me encuentro es decir dir en windows
$ pwd //ubicacion actual
$ mkdir //make directori nueva carpeta
$ touch archivo.extencion//crear archivo vacio
$ cat archivo.extencion//muestra el contenido del archivo
$ history //historial de comandos utilizados durante esa sesion
$ rm archivo.extencion //eliminacion de archivo
$ comando --help //ayuda sobre el comando
$ checkout //traer cambios realizado
$ git rm --cached archivo.extencion//se usa para devolver el archivo que se tiene en ram cuando escribimos git add lo devuleve a estado natural mientra esta en staging


$ git config --list //muestra la lista de configuracion de git
//Cambiar correo del usuario
git config --global user.email evergarah2000@gmail.com
//cambiar nombre del usuario
git config --global user.name “Erik “Vergara

$ git config --list --show-origin//rutas de acceso a la 

configuración de git
$ git log archivo.extencion //muestra la historia del archivo

* Conexión con Repositorio remoto

<code>$Git remote add origin “url”</code>

* Eliminar Repo Remoto
> <code>git remote rm referencia</code>

Ver Referencias Remotas
$git remote -v

Traer repositorio remoto al repo local
Git pull origin main

Enviar cambios al repo remoto
$Git push origin main
$git push -u origin main


Error al unir historias no relacionadas
$git push origin master --allow-unrelated-histories


Moverse entre Ramas
	git checkout experimental
Crear una rama:
	Git branch Nombre

Eliminar una rama
	Git branch -d nombre

Cambiar el nombre de una rama
	git branch -M old-name new-name

	Git branch -M main

Fusionar una Rama con otra
Git merge Nombre de la rama

Historia de las ramas
git show-branch --all


Crear un aliases
alias arbolito="git log --all --graph --decorate --oneline"


Crear un tag
Git tag -a v0.1 -m “##” 0594953

Eliminar un tag de git
git -d v0.1
Eliminar un tag de GitHub
git push origin :refs/tags/v0.1



## Terminal

* Conectar al modo root

        sudo su
* Apagar un equipo

        sudo shutdown -h 0

* Listar particiones de Disco

        sudo disk -l

* Cambiar permisos de un directorio

        sudo chmod 777 


sudo su - administrador
psql
\password
\q


### Directorios

* Copiar archivos de la maquina local a remotos

<p>Comando + ruta del archivo + usuario@Ip: ruta destino</p>

<code>scp logoidtolu.png  username@ipaddress:/home/evergara/imagenes</code>

Remover Directorios
	Sudo rm -r nombre_Directorio

Procesos
Listar todos los procesos del sistema
	Ps aux
Listar procesos en el puerto 8080
	sudo lsof -i -P -n | grep LISTEN | grep 8080

Postgresql

Conectar a postgresql 
	sudo -u postgres psql
Eliminar una Base de Datos
	DROP DATABASE <database_name>;
Eliminar Roles
	DROP USER <user_name>;
	DROP USER IF EXISTS <name>;
www.descargasnsn.to - www.descargasnsn.com

MongoDb

Conectar a mongo 
 	mongosh

mongodb://admin:adminidtolu@localhost:27017/?authMechanism=DEFAULT
Ver status
	sudo systemctl status mongod
Iniciar Servicios
	brew services start mongodb-community@5.0
Detener Servicios
	brew services stop mongodb-community@5.0

Ver Bases de Datos
	use DATABASE_NAME
Listar Colecciones
	show collections
Crear Colecciones 
	db.createCollection(name, options)   
Eliminar Bases de Datos
	db.dropDatabase()

Docker

* Listar contenedores
	docker ps
	docker ps -a
* Correr docker en segundo plano
	docker-compose up -d
* Listar volumenes
	docker volume ls
* Eliminar volúmenes no usado
	docker volume prone
* Eliminar Contenedores
	 docker rm 96a44ff1a72e 4f5bd2244ae8 --force
* Eliminar imágenes
	docker rmi iot-backend iot-frontend  --force
* Ver logs de un contenedor
	docker logs —follow <container ID>
* Cargar una imagen de docker
	docker load < fileimage

docker run -d -p 3132:80 --name idtolu-iot-backend iot-backend


sudo nano /opt/kafka/config/server.properties 

Kafka

bin/kafka-server-start.sh config/server.properties
bin/kafka-console-producer.sh --broker-list localhost:9092 --topic prices
bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic prices --from-beginning

* creates topics **
bin/kafka-topics.sh --bootstrap-server 127.0.0.1:9092 --create --topic rust --partitions 3 --replication-factor 1 --config max.message.bytes=64000 --config flush.messages=1 --config compression.type=snappy

* update configs topic **
bin/kafka-configs.sh --bootstrap-server localhost:9092 --entity-type topics --entity-name rust --alter --add-config max.message.bytes=128000

* check updates config **
bin/kafka-configs.sh --bootstrap-server localhost:9092 --entity-type topics --entity-name rust --describe

* remove updates config override **
/opt/kafka/bin/kafka-configs.sh --bootstrap-server localhost:9092  --entity-type topics --entity-name rust --alter --delete-config max.message.bytes

* delete topic **
bin/kafka-topics.sh --bootstrap-server 127.0.0.1:9092 --delete --topic rust

**list topics **
bin/kafka-topics.sh --list --bootstrap-server 127.0.01:9092

** show messages **
bin/kafka-console-consumer.sh --topic rust --from-beginning --bootstrap-server 127.0.0.1:9092

** delete topics records ***
{
  "partitions": [
    {
      "topic": "rust",
      "partition": 0,
      "offset": 3
    }
  ],
  "version": 1
}

bin/kafka-delete-records.sh --bootstrap-server 127.0.0.1:9092 --offset-json-file rust.json

** list consumers **
/bin/kafka-consumer-groups.sh --list --bootstrap-server localhost:9092

** list members groups **
/bin/kafka-consumer-groups.sh --describe --group erik --members --bootstrap-server localhost:9092

** list groups **
/bin/kafka-consumer-groups.sh --describe --group erik --bootstrap-server localhost:9092

** list all members groups **
/bin/kafka-consumer-groups.sh --list --bootstrap-server localhost:9092

** delete consumer groups by group and topic **
bin/kafka-consumer-groups.sh --delete-offsets --group name-group --topic rust  --bootstrap-server 127.0.0.1:9092

| title |  comando|
| :----:      | :----:   |
|

| Syntax      | Description | Test Text     |
| :----:      | :----:   |:----: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |