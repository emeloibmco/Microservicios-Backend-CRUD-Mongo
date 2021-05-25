# Microservicios-Backend-CRUD-Mongo ☁
## Despliegue Backend CRUD MongoDB en Kubernetes 💻

## Índice  📰
1. [Pre-Requisitos](#Pre-Requisitos-pencil)
2. [Paso 1. Clonar Repositorio](#Paso-1)
3. [Paso 2. Editar Backend de la aplicación con credenciales de servicio MongoDB público o privado](#Paso-2)
4. [Paso 3. Crear imagen del Backend](#Paso-3)
5. [Paso 4. Subir imagen del Backend a IBM Cloud Container Registry](#Paso-4)
6. [Paso 5. Desplegar imagen del Backend en Kubernetes](#Paso-5)

## Pre-requisitos :pencil:
* Tener instalado *Git* en su computador, para clonar el respositorio.
* Tener instalada la CLI de *Docker*.
* Tener instalado *Docker Desktop* para verificar la creación de su imagen.
* Tener instalada la CLI de IBM Cloud.
* Contar con una cuenta en <a href="https://cloud.ibm.com/"> IBM Cloud </a>.
* Implementar de forma previa un servicio "Databases for MongoDB" público o privado.
* Contar con un clúster en Kubernetes.

## Paso 1
### Clonar Repositorio 🗂
La aplicación utilizada en esta guía la puede encontrar en este repositorio. Para clonar el repositorio en su computador, realice los siguientes pasos:

1. En su computador cree una carpeta a la que pueda acceder con facilidad y asígnele un nombre relacionado con la aplicación.
2. Abra una ventana de *Windows PowerShell* y muevase con el comando *cd* hasta la carpeta que creó en el paso 1.
3. Una vez se encuentre dentro de la carpeta creada coloque el siguiente comando para clonar el repositorio:
```
git clone https://github.com/emeloibmco/Microservicios-Backend-CRUD-Mongo
```
4. Acceda a la carpeta **"Microservicios-Backend-CRUD-Mongo"** creada al clonar el repositorio y verifique que se encuentran descargados los archivos de la aplicación que se muestran en el repositorio.


## Paso 2. 
### Editar Backend de la aplicación con credenciales de servicio MongoDB público 🔓 o privado 🔒
Para que el Backend de su aplicación funcione correctamente debe agregar las respectivas credenciales del servicio *Databases for MongoDB* en el código. Por esto, siga los pasos que se muestran a continuación:
1. Ingrese al servicio *Databases for MongoDB* creado. Recuerde que puede ser público o privado.

3. De click en la pestaña *Overview*, vaya a la parte inferior en donde se encuentran los endpoints y en la opción *Quick Start* descargue el certificado TLS.
<p align="center"><img width="700" src="https://github.com/emeloibmco/Microservicios-Backend-CRUD-Mongo/blob/main/Imagenes/Certificado-TLS.gif"></p>

3. De click en la pestaña *Credenciales de Servicio* y verifique que exista un conjunto de credenciales. En caso de que no se visualice información al respecto, de click en la opción *Nueva Credencial*.
<p align="center"><img width="700" src="https://github.com/emeloibmco/Microservicios-Backend-CRUD-Mongo/blob/main/Imagenes/Credenciales.gif"></p>

4. Despliegue las credenciales del servicio creadas, visualice y copie los valores que aparecen en las siguientes variables:
* USERNAME (-u).
* PASSWORD (-p).
* Hostname (son 3 direcciones distintas).
* Port.
* Database.

> Nota: Las variables Hostname, Port y Database también las puede encontrar en la pestaña *Overview*, parte inferior en la opción *MongoDB*.

5. Abra el código del Backend en su computador e ingrese a la siguiente ruta: server/conection. En esta ubicación debe encontrar el archivo *mongo.js*. Junto a este archivo agregue el certificado TLS descargado en el ítem 1.

6. Abra el archivo *mongo.js* y complete los siguientes campos con los datos de las variables del ítem 4 dentro de las comillas:
```
const mongoHost1 = process.env.MONGO_HOST1 || 'Valor_Hostname1';
const mongoHost2 = process.env.MONGO_HOST2 || 'Valor_Hostname2';
const mongoHost3 = process.env.MONGO_HOST3 || 'Valor_Hostname3';
const mongoUser = process.env.MONGO_USER || 'Valor_Username';
const mongoPass = process.env.MONGO_PASS || 'Valor_Passwrod';
const mongoDBName = process.env.MONGO_DB_NAME || 'Valor_Database';
```

## Paso 3. 
### Crear imagen del Backend 📱

## Paso 4. 
### Subir imagen del Backend a IBM Cloud Container Registry 📤

## Paso 5.
### Desplegar imagen del Backend en Kubernetes 🏆



