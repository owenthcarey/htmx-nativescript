// Run with `node server.js`
// Access at http://localhost:3000/xml

const express = require('express');
const app = express();
const port = 3000;

// The XML content you want to serve
const xmlContent = `
<ListView items="[{title: 'Item 0'}, {title: 'Item 1'}, {title: 'Item 2'}, {title: 'Item 3'}, {title: 'Item 4'}, {title: 'Item 5'}, {title: 'Item 6'}, {title: 'Item 7'}, {title: 'Item 8'}, {title: 'Item 9'}, {title: 'Item 10'}, {title: 'Item 11'}, {title: 'Item 12'}, {title: 'Item 13'}, {title: 'Item 14'}, {title: 'Item 15'}, {title: 'Item 16'}, {title: 'Item 17'}, {title: 'Item 18'}, {title: 'Item 19'}]">
  <ListView.itemTemplate>
    <GridLayout padding="16" columns="20, *">
      <ContentView width="20" height="20" borderRadius="20" backgroundColor="#65adf1" />
      <Label text="{{ title }}" col="1" textWrap="true" marginLeft="8" />
    </GridLayout>
  </ListView.itemTemplate>
</ListView>
`;

// Endpoint to serve the XML
app.get('/xml', (req, res) => {
  res.header("Content-Type", "text/xml");
  res.send(xmlContent);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
