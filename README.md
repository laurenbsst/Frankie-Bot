<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<div align="center">
  
  
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
  
  
</div>



<!-- PROJECT LOGO -->
<p align="center">
  <img src="https://user-images.githubusercontent.com/58308897/158057786-42cc3cb0-799d-4715-bf4d-a416692a1314.jpg" height=175px, width=180px/>
</p>
<h2 align="center">Frankie-Bot</h3>
  <p align="center">
    A simple Discord bot that posts random quotes from the TV show 'The Middle'
    <br />
    <a href="https://github.com/laurenbsst/Frankie-Bot"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/laurenbsst/Frankie-Bot">View Demo</a>
    ·
    <a href="https://github.com/laurenbsst/Frankie-Bot/issues">Report Bug</a>
    ·
    <a href="https://github.com/laurenbsst/Frankie-Bot/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

'Frankie-Bot' is a bot developed for members of 'The Middle' Discord server. Upon command, Frankie-Bot will post a random quote from either Frankie, Mike, Brick, Sue or Axl (and some other characters too!) into the bot-commands channel. Fans can recall their favourite 'The Middle' scenes and lines, and discuss these with others!

<img src= "https://user-images.githubusercontent.com/58308897/145884240-a70e0ba9-bf86-42fe-9933-ac1b58eff173.jpg" width="800"/>


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Discord.js](https://discord.js.org/#/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/docs/)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get Frankie-Bot up and running locally on your machine, follow the prerequisite and installation steps below.

### Prerequisites

* <strong>Node.js:</strong> You will need the latest version of Node.js, which you can download <a href="https://nodejs.org/en/download/">here.</a>
* <strong>Environment variables:</strong> To keep secret information secure, you will need to create a ```.env``` file within the project directory. Once your ```.env```
  file has been created, use a text editor to copy in your environment variables as shown in the example below. <strong>NOTE: You must write the MONGODB_SRV value exactly
  as it is written in the example.</strong> This will allow you access to the quotes database. You are required to input your own Discord token and channel ID.
  
    ```
    TOKEN = abcdefghij...
    MONGODB_SRV = mongodb+srv://all_users:1234@laurens-cluster.keqmo.mongodb.net/The-Middle
    CHANNEL = 1234567...
    ```

### Running Frankie-Bot locally

Once you have followed the above prerequisite steps, you are ready to run the bot locally. To do so, simply open the Discord desktop application, and then type the following command into your terminal:

  ```
  node .
  ```
### Adding the bot to your server

If you don't want to run the bot locally, and simply wish to add Frankie-Bot to your Discord server, you can do so through the [invite link](https://discord.com/api/oauth2/authorize?client_id=873268006866780280&permissions=534723951680&scope=bot)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Once you've got Frankie-Bot up and running, simply type ```!quote``` in your specified Discord channel to see a randomly-generated quote.

<img src="https://user-images.githubusercontent.com/58308897/145881997-151e205d-625e-4dda-9e7a-9790255e942f.jpg" width="600"/>


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Posting a random quote
- [x] The daily quote
- [] Saving new quotes

See the [open issues](https://github.com/laurenbsst/Frankie-Bot/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Lauren Bassett - [LinkedIn](https://www.linkedin.com/in/lauren-bassett-4310921b0/) - laurenb252@outlook.com

Project Link: [https://github.com/laurenbsst/Frankie-Bot](https://github.com/laurenbsst/Frankie-Bot)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Image of Frankie Heck. Copyright of Warner Bros. Entertainment Inc.](https://www.warnerbros.com/tv/middle)
* [Anson the Developer's Discord.js and MongoDB tutorials](https://youtu.be/sng1vw9l7J0)
* [CodeLyon's Code Your Own Discord Bot (Basics)](https://youtu.be/j_sD9udZnCk)
* [Discord.js docs](https://discord.js.org/#/docs/main/stable/general/welcome)
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/laurenbsst/Frankie-Bot.svg?style=for-the-badge
[contributors-url]: https://github.com/laurenbsst/Frankie-Bot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/laurenbsst/Frankie-Bot.svg?style=for-the-badge
[forks-url]: https://github.com/laurenbsst/Frankie-Bot/network/members
[stars-shield]: https://img.shields.io/github/stars/laurenbsst/Frankie-Bot.svg?style=for-the-badge
[stars-url]: https://github.com/laurenbsst/Frankie-Bot/stargazers
[issues-shield]: https://img.shields.io/github/issues/laurenbsst/Frankie-Bot.svg?style=for-the-badge
[issues-url]: https://github.com/laurenbsst/Frankie-Bot/issues
[license-shield]: https://img.shields.io/github/license/laurenbsst/Frankie-Bot.svg?style=for-the-badge
[license-url]: https://github.com/laurenbsst/Frankie-Bot/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-gray?style=for-the-badge&logo=linkedin
[linkedin-url]: https://www.linkedin.com/in/lauren-bassett-4310921b0/
[product-screenshot]: images/screenshot.png

