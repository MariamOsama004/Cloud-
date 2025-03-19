const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // تأكدي أن ملفات HTML و CSS و JavaScript موجودة داخل مجلد "public"

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
