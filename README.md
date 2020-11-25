 ```
 _____   _____   _____   _____         _____   _____    _   _____   _____   ____ 
|  _  \ | ____| | ____| |  _  \       |  ___| |  _  \  | | |  _  \ /  ___| | ____|
| |_| | | |__   | |__   | |_| |       | |__   | |_| |  | | | | | | | |     | |__ 
|  _  { |  __|  |  __|  |  _  /       |  __|  |  _  /  | | | | | | | |  _  |  __|
| |_| | | |___  | |___  | | \ \       | |     | | \ \  | | | |_| | | |_| | | |___ 
|_____/ |_____| |_____| |_|  \_\      |_|     |_|  \_\ |_| |_____/ \_____/ |_____| 
```

==================================================================================

# Lancement du site web

1. Commencez par creer une connexion à une base donnée mongodb en localhost sur le port 27017
2. Ajoutez-y une collection nommée **nwt**
3. Remplisez cette dernière en y important le fichier JSON qui se trouve à l'emplacement : 
> /beer-front-ng/src/assets/scriptBDD
4. Depuis un terminal, dans le dossier beer-back-nest, lancez la commande :
```
yarn run start:dev
```
4. Depuis un terminal, dans le dossier beer-front-ng, lancez la commande : 
```
yarn run start
```
