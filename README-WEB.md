![preview-web](https://cloud.githubusercontent.com/assets/2954281/17777476/5dbbbe1c-6569-11e6-9cc4-77185ae9bf92.png)

# Project Hoverboard

[![Join the chat at https://gitter.im/gdg-x/hoverboard](https://badges.gitter.im/gdg-x/hoverboard.svg)](https://gitter.im/gdg-x/hoverboard?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Project Hoverboard is the next generation conference website template after
[Project Zeppelin](https://github.com/gdg-x/zeppelin) and more optimized
version - [Project Zeppelin-Grunt](https://github.com/gdg-x/zeppelin-grunt).

> Template is brought by [Oleh Zasadnyy](https://plus.google.com/+OlehZasadnyy)
from [GDG Lviv](http://lviv.gdg.org.ua/).

> *Do you :heart: it?* Show your support - please, :star: the project.

:zap: [Live demo](https://hoverboard-dev.firebaseapp.com/)

### Features
:white_check_mark: Polymer  
:white_check_mark: [PRPL pattern](https://www.polymer-project.org/1.0/toolbox/server)  
:white_check_mark: Offline access  
:white_check_mark: Material design  
:white_check_mark: Animations  
:white_check_mark: Integrated speakers and sessions management  
:white_check_mark: SEO friendly  
:white_check_mark: Optimized and fast  
:white_check_mark: Editable theme colors  
:white_check_mark: Quick deploy (with [Travis CI](/docs/tutorials/deploy.md))  
:white_check_mark: My schedule  
:white_check_mark: Firebase Data Loading :new:  
:white_check_mark: Sessions star rating :new:  

### Setup
:book: [Full documentation](/docs/).

##### Docker-based development environment

If you don't want to bother with the dependencies, you can use the docker container for development.

Build the docker image:

    docker build -t hoverboard .

and execute the commands associated to the docker env in the following documentation:

:book: Read more in [docker docs](/docs/tutorials/docker.md).

:point_right: **[Fork](https://github.com/gdg-x/hoverboard/fork) this repository** and clone it locally.

##### Install dependencies

    npm install
    
Or you can install with Docker container: 
     
    docker run -v "$PWD":/app hoverboard npm install 

##### Start the development server

This command serves the app at `http://localhost:3000` and provides basic URL
routing for the app:

    npm run serve
    
Or you can serve Docker container:

    docker run -v "$PWD":/app hoverboard

:book: Read more in [setup docs](/docs/tutorials/set-up.md).


### Build

This command performs HTML, CSS, and JS minification on the application
dependencies, and generates a service-worker.js file with code to pre-cache the
dependencies based on the entrypoint and fragments specified in `polymer.json`.
The minified files are output to the `build`.

    npm run build

Or you can build in Docker container:

    docker run -v "$PWD":/app hoverboard npm run build

:book: Read more in [deploy docs](/docs/tutorials/deploy.md).   

### Updating
Here is a git workflow for updating your fork (or downloaded copy) to the latest version:
```
git remote add upstream https://github.com/gdg-x/hoverboard.git
git fetch upstream
git merge upstream/master # OR git merge upstream/develop
# resolve the merge conflicts in your editor
git add . -u
git commit -m 'Updated to the latest version'
```

### Roadmap :rocket:
:x: Admin panel    
:x: Push notification  
:x: ES2015  
:x: Accessibility  
:x: Unit/Integration Tests  
:point_right: __Propose your feature with [creating an issue](https://github.com/gdg-x/hoverboard/issues/new)__

### Contributing

Project Hoverboard is still under development, and it is open for contributions.
Feel free to send PR. If you have any questions, feel free to contact
[Oleh Zasadnyy](https://plus.google.com/+OlehZasadnyy).

##### General workflow
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Make your changes
4. Run the tests, adding new ones for your code if necessary
5. Commit your changes (`git commit -am 'Added some feature'`)
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request

:book: Read complete [contributing guide](CONTRIBUTING.md).


### Contributors :sparkles:
See [list of contributors](https://github.com/gdg-x/hoverboard/graphs/contributors).

__Maintainer:__ [Oleh Zasadnyy](https://github.com/ozasadnyy) and [Sophie Huts](https://github.com/sophieH29).


###### The GDG App, GDG[x] are not endorsed and/or supported by Google, the corporation.


### License

Project is published under the [MIT license](https://github.com/gdg-x/hoverboard/blob/master/LICENSE.md).  
Feel free to clone and modify repo as you want, but don't forget to add reference to authors :)
