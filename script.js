rs.initiate()
rs.status()

session = db.getMongo().startSession()

session.getDatabase("db").comptes.insertMany([
    {
        titulaire: 'Thomas',
        solde: 1000
    }, {
        titulaire: 'Damien',
        solde: 1000
    }
])

session.getDatabase("db").comptes.find()

session.startTransaction()
session.getDatabase("db").comptes.updateOne(
    { titulaire: 'Thomas' },
    { $inc: { solde: -100 } }
)
session.getDatabase("db").comptes.updateOne(
    { titulaire: 'Damien' },
    { $inc: { solde: 100 } }
)
session.commitTransaction()

session.getDatabase("db").comptes.find()

session.endSession()
