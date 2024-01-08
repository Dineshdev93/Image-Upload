const express = require("express");
const router = new express.Router();
const userSchema = require("../schema/user");


const multer = require("multer");
// image storage
const imgconfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `image-${file.originalname}`);
  },
});
// image filter
const isImage = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Only image is aloowed..."));
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});


router.post("/post",upload.single("photo"),async(req,res)=>{

  const {filename} = req.file;
  const {user} = req.body;
  const {desi} = req.body;

  const userData = new userSchema({
    user : user,
    imagepath : filename,
    desi : desi
  })
    let result = await userData.save()
    res.send(result)
})

router.get("/",async(req,res)=>{
    let result = await userSchema.find()
    res.send(result)
})
router.delete("/del/:id",async(req,res)=>{
  let result =await userSchema.deleteOne({_id : req.params.id})
  res.send(result)
})
module.exports = router