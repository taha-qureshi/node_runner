const hello = () => {
  console.log('Hello wrold');
}

const JSmodule = (
  function anon() {

    const anotherModule = {
      printer() {
        console.log('Calculating bio data from another module');
      }
    }

    const main = {
      init() {
        console.log('Module method called');
        console.log('Now calling another modules method');
        anotherModule.printer()
      }
    }

    return {start: main.init}
  }
)()

JSmodule.start()