const router = require("express").Router()
const InstaPost = require("./models/schema")
const bodyParser = require("body-parser");
router.use(bodyParser.json());
 router.use(bodyParser.urlencoded({ extended: false }))

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

    router.get('/author_suggestions', async (req,res) => {
        try {
            const authorList = await InstaPost.distinct('Author');
            res.json({
                status: "success",
                result: authorList
            })
        } catch (e) {
            res.json({
                status: "failed",
                message: e.message
            })
        }
    })

module.exports = router