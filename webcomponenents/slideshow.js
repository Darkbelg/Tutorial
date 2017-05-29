/**
 * Created by stijn on 29-May-17.
 */
class SlideShowComponent extends HTMLElement {
    constructor() {
        //de constructer van de parent class;dit is verplicht
        super();


//lees het src-attribuut vna het element voor een lijst van afbeeldingen
        var imageArray = JSON.parse(this.getAttribute("src"));
        var currentImage = 1;

//importeer de slideshow-template van je component-bestand
        var importedDocument = document.querySelector('link[rel="import"]').import;
        var template = importedDocument.querySelector("#slideshow-template");
//maak een kopie van de slideshow-template
        var copy = document.importNode(template.content, true);
//maak een shadow DOM root met deze component als host
        var shadowRoot = this.attachShadow({mode: "open"});
//voeg de gekopieerde template aan de schaduw-DOM toe
        shadowRoot.appendChild(copy);
//toon de afbeelding oop de gespecifeerde posittie in het array
        function displayImage(imageNumber) {
            currentImage = imageNumber;
            shadowRoot.getElementById("slideshow-image").src = imageArray[imageNumber - 1];
        }

//toon de volgende afbeelding in de array of ga terug naar het begin
        function nextImage() {
            if (currentImage < imageArray.length) {
                currentImage++;
            } else {
                currentImage = 1;
            }
            displayImage(currentImage);
        }

//pak een willekeurige afbeelding uit het array om te laten zien
        function randomImage() {
            var imageNumber = randomInt(1, imageArray.length);
            displayImage(imageNumber);
        }

        // Display the image at the specified position in the array
        function displayImage(imageNumber) {
            currentImage = imageNumber;
            shadowRoot.getElementById("slideshow-image").src = imageArray[imageNumber - 1];
        }

        // This utility function calculates a random integer between min and max.
        function randomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

//als het er op de component geklikt wordt,toon dan de volgende afbeelding
        this.addEventListener('click', e => {nextImage();});
//toon een willekeurige afbeelding als de component voor het eerst geladen is
        randomImage();
    }
}
//defineer het custom <slideshow-component>-element met bovenstaande class
customElements.define("slideshow-component", SlideShowComponent);
// class SlideshowComponent extends HTMLElement {
//
//     constructor() {
//
//         // Invokes the constructor of the parent class; this is mandatory
//         super();
//
//         // Read the src attribute of the element to obtain a list of images
//         var imageArray = JSON.parse(this.getAttribute("src"));
//         var currentImage = 1;
//
//         // Import the slideshow template from our component file
//         var importedDocument = document.querySelector('link[rel="import"]').import;
//         var template = importedDocument.querySelector("#slideshow-template");
//
//         // Create a copy of the slideshow template ready to use
//         var copy = document.importNode(template.content, true);
//
//         // Create a Shadow DOM root with this component as the host
//         var shadowRoot = this.attachShadow({mode: "open"});
//         // Add the copied template to the shadow DOM
//         shadowRoot.appendChild(copy);
//         // Display the next image in the array, or go back to the beginning
//         function nextImage() {
//             if (currentImage < imageArray.length) {
//                 currentImage++;
//             } else {
//                 currentImage = 1;
//             }
//             displayImage(currentImage);
//         }
//
//         // Pick a random image from the array to display
//         function randomImage() {
//             var imageNumber = randomInt(1, imageArray.length);
//             displayImage(imageNumber);
//         }
//
//         // Display the image at the specified position in the array
//         function displayImage(imageNumber) {
//             currentImage = imageNumber;
//             shadowRoot.getElementById("slideshow-image").src = imageArray[imageNumber - 1];
//         }
//
//         // This utility function calculates a random integer between min and max.
//         function randomInt(min, max) {
//             return Math.floor(Math.random() * (max - min + 1)) + min;
//         }
//
//         // When we click the component, move to the next image
//         this.addEventListener('click', e => {
//             nextImage();
//     });
//
//
//
//
//
//         // Display a random image when the component is first loaded
//         randomImage();
//
//     }
// }
//
// // Define the custom <slideshow-component> element using the class above
// customElements.define("slideshow-component", SlideshowComponent);