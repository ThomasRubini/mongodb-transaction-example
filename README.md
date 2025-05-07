to verify after startup:

```js
docker compose exec -it mongodb mongosh
use db
db.comptes.find()
```
