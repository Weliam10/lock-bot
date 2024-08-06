### Aide de Jean Parker pour déployer le bot 'lock-bot' de venom sur Termux.

---

Cette aide est destinée à ceux qui souhaitent déployer le bot **lock-bot** sur **Termux**  sans avoir à télécharger les fichiers. Vous êtes libres de fork le repo pour modifier le code en cas d'erreur.

<p align="center">
<img alt="Développement" width="250" src="https://media2.giphy.com/media/W9tBvzTXkQopi/giphy.gif?cid=6c09b952xu6syi1fyqfyc04wcfk0qvqe8fd7sop136zxfjyn&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" /> 
</p>

<a><img src='https://i.imgur.com/LyHic3i.gif'/></a><a><img src='https://i.imgur.com/LyHic3i.gif'/></a>


# Termux Deployment
```
termux-setup-storage
```
```
apt update
```
```
apt upgrade
```
```
pkg update && pkg upgrade
```
```
pkg install bash
```
```
pkg install libwebp
```
```
pkg install git -y
```
```
pkg install nodejs -y
```
```
pkg install ffmpeg -y 
```
```
pkg install wget
```
```
pkg install yarn
```
```
git clone (copie et passe le lien du repo que tu a fork avec tes modifications ) 
```
```
cd lock-bot
```
```
sh instalar.sh
```
```
venom
```
```
venom
```
```
Appuie sur entrer deux fois !
```
Dès que le chargement fini vous devez choisir la fonction "1" pour le pairing code et "2" pour le code qr

À cet stade vous mettez votre numéro comme l'inscrit sur la console termux et link avec le code donner avec WhatsApp
```
### NB: après si le bot s'arrête vous ne devriez que faire :
```
cd lock-bot
```
```
npm start
```

<a><img src='https://i.imgur.com/LyHic3i.gif'/></a><a><img src='https://i.imgur.com/LyHic3i.gif'/></a>
- If you want Command For 24/7 (might no work) 
```js
npm i -g forever && forever index.js && forever save && forever logs
```
<br>

<a><img src='https://i.imgur.com/LyHic3i.gif'/></a><a><img src='https://i.imgur.com/LyHic3i.gif'/></a>
<br>
