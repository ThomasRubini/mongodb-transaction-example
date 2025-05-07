start with:
```bash
$ docker compose up -d
```

to verify data after startup:
```js
$ docker compose exec -it mongodb mongosh
use db
db.comptes.find()
```
