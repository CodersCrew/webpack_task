# Zadanie do zestawu "npm, Webpack, Babel"

![alt text](https://image.ibb.co/eD3qXA/Screenshot-2018-11-23-at-22-46-27.png)

Twoim zadaniem jest stworzenie prostej strony, która przy każdym odświeżeniu wygeneruje na środku losową twarz typu text-face w losowym kolorze (jak ta powyżej). Oto Twoja lista kroków:

1. Zainicjalizuj w projekcie npm i dodaj do niego wszystkie biblioteki wymienione poniżej. To które z nich pójdą do "dependencies", a które do "devDependencies" musisz odgadnąć sam.
    * `babel-loader`, `@babel/core`, `@babel/preset-env`, `webpack` (https://github.com/babel/babel-loader)
    * `css-loader`, `style-loader` (https://github.com/webpack-contrib/css-loader)
    * `html-webpack-plugin` (https://github.com/jantimon/html-webpack-plugin)
    * `webpack-cli` (jest potrzebny w nowej wersji webpacka, żeby działał z konsoli)
    * `random-color` (https://www.npmjs.com/package/random-color)
    * `random-text-faces `(https://www.npmjs.com/package/random-text-faces)

2. W dolnej części pliku `renderFace.js` wyeksportuj znajdującą się w nim funkcję. Będzie Ci potrzebna do wygenerowania text-face na stronie.

3. W pliku `index.js` zaimportuj funkcję `renderFace` oraz funkcje z bibliotek `random-text-faces` oraz `random-color`. Zaimportuj także plik `styles.css`.

4. Wygeneruj losowy kolor oraz losowy text-face i przypisz je do zmiennych.

5. Przekaż zmienne z poprzedniego punktu do funkcji `renderFace` wywołując ją.

6. Utwórz plik konfiguracyjny Webpack'a i ustaw w nim odpowiednio `entry` oraz `output`. Niech webpack zapisuje wynikowe pliki w folderze o nazwie `dist`.

7. Dodaj do konfiguracji Webpack'a babel-loader i odpowiednio go skonfiguruj. Możesz skorzystać z gotowego kodu w repozytorium babel-loader'a.

8. Dodaj do konfiguracji Webpack'a css-loader i odpowiednio go skonfiguruj. Możesz skorzystać z gotowego kodu w repozytorium css-loader'a.

9.  Dodaj do konfiguracji Webpack'a html-webpack-plugin i odpowiednio go skonfiguruj.

10. W package.json odnajdź klucz o nazwie "scripts". Zastąp w nim klucz "test" słowem "build", a jako jego wartość wpisz "webpack".

11. Przejdź do konsoli i z poziomu folderu z zadaniem wpisz polecenie `npm run build`. Jeśli wszystko zrobiłeś dobrze webpack powinien utworzyć folder o nazwie `dist`. Po uruchomieniu znajdującego się w nim pliku `index.html` Twoim oczom powinna ukazać się strona z ciemnym tłem i kolorowym text-face.