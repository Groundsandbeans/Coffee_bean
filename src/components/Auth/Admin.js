var Admin = require("firebase-admin")
var serviceAccount = require("./components/Auth/ServiceAccountKey.json")
Admin.initializeApp({
    credential: Admin.credential.cert(serviceAccount)
})

const uid = "hUe0qLE30KPtYpw89AsMtoXQMbt2"
const isAdmin = true

Admin.auth().createCustomToken(uid, isAdmin)
    .then((customToken) => {
        console.log(customToken)
    })

    .catcch((error) => {
        console.log("error creating token", error)
    })

    // export default Admin;