"use strict";

//필요 모듈 임포트
const port = 3000,
    http = require('http'),
    httpStatus = require('http-status-codes'),
    router = require('./router'),
    contentTypes = require('./content-types'),
    utils = require('./utils');




//Listing 7.8 (p.127)
//GET 라우트
router.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/index.html", res);
});
router.get("/courses.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/courses.html", res);
});
router.get("/contact.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/contact.html", res);
});


//POST 라우트

router.post("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/thanks.html", res);
});

// css에셋 라우트

router.get("/bootstrap.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/bootstrap.css", res);
});
router.get("/style.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/style.css", res);
});

// img 라우트

router.get("/people.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/img/people.jpg", res);
});
router.get("/product.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/img/product.jpg", res);
});
router.get("/graph.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("public/img/graph.jpg", res);
});





http.createServer(router.handle).listen(port);
console.log(`Server at: http://localhost${port}`);