const router = require("express").Router()
const InstaPost = require("./models/schema")
const bodyParser = require("body-parser");
router.use(bodyParser.json());
 router.use(bodyParser.urlencoded({ extended: false }))

router.get("/data", async (req, res) => {
    try {
        const getdata = await InstaPost.find().sort({Date:-1});
        res.json({
            result: getdata
        })
    }
    catch (e) {
        res.json({
            status: "failed",
            message: e.message
        })
    }
})

router.get('/search/:searchTerm' , async  (req, res)  => {
    const searchTerm = req.params.searchTerm
    console.log(searchTerm)
    try{
        const searchResult = await InstaPost.find({ Author:  searchTerm,  })
        res.json({
            status: "success",
            result: searchResult
        })
    }
    catch(e){
        res.json({
            status: "failed",
            message: e.message
        })
    }


    })

module.exports = router