function gridUpNode(rootNode) {
  var blockSource = document.createElement("div")
                    blockSource.classList.add("block")
  var rowSource = document.createElement("row")
                  rowSource.classList.add("row")

  var blockWidth = 20
  var blockHeight = 20
  var viewportWidth = rootNode.offsetWidth
  var viewportHeight = rootNode.offsetHeight
  var columnMax = Math.ceil(viewportWidth / blockWidth)
  var rowMax = Math.ceil(viewportHeight / blockHeight)

  for(r=0;r<=rowMax;r++) {
    setTimeout(function() {
      var newRow = rowSource.cloneNode()
      rootNode.appendChild(newRow)

      for(c=0;c<=columnMax;c++) {
        setTimeout(function() {
          var newBlock = blockSource.cloneNode()
          if (Math.random() < 0.05) {
            newBlock.classList.add("irritate")
          }
          newRow.appendChild(newBlock)

        }, c * r * Math.random())
      }
    }, r * Math.random() * 50)
  }
};

var target = document.querySelector("#gridTarget")
if(target) {
  gridUpNode(target)
}
