const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://richardyjkim:1111@cluster0.vdahu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
