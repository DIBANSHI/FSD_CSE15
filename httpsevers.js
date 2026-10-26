import http from "http";

const port = 3005;

const usedata = {
    name: "Dibanshi",
    id: 1,
    course: "B.Tech"
};

const server = http.createServer((req, res) => {

    // req = request
    // res = response

    const url = req.url;
    const method = req.method;

    if (url === "/msg" && method === "GET") {
        res.end("This is welcome message");
    }

    else if (url === "/sys" && method === "GET") {
        res.end("This is system information");
    }

    else if (url === "/" && method === "GET") {
        res.end(JSON.stringify(usedata));
    }

    else {
        res.statusCode = 404;
        res.end("Page not found");
    }
});

server.listen(3005, () => {
    console.log(`Server is running on port number 3005`);
});