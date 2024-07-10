var images = [
    "https://i.imgur.com/pttvySs.jpg", // If we had any
    "https://i.imgur.com/Stl0y81.jpg", // Hard right
    "https://i.imgur.com/KcSXPER.jpg", // Kill chain
    "https://i.imgur.com/ULcCyVx.jpg", // Kevin James
    "https://i.imgur.com/Gwh1r0L.png", // Anakin - We use k8s now
    "https://i.imgur.com/QJh4ygO.jpg", // We dont do that here
    "https://i.imgur.com/4Wqzwlq.jpg", // Gitops arms
    "https://i.imgur.com/rmhp3EJ.jpg", // Keep your secrets
    "https://i.imgur.com/2Z8qEvC.png", // Terraform destroy seagull
    "https://i.imgur.com/weNsDia.jpg", // Explaining my K8S architecture
    "https://i.imgur.com/dgB9Olt.jpg", // Thanos infinity devops stones
    "https://i.imgur.com/2Xntz2P.jpg", // Gitops Winnie the Pooh
    "https://i.imgur.com/pIGcI2d.jpg", // Rename the file Kermitt
    "https://i.imgur.com/n5lNz3z.jpg", // Watch the green ticks pleasure
    "https://i.imgur.com/tup8Ocu.jpg", // Anakin - Sent you the app 
    "https://i.imgur.com/yjpOvlM.jpg", // Scroll of truth
    "https://i.imgur.com/akNhnrh.jpg", // Thinking about other women
    "https://i.imgur.com/eqpDlh5.jpg", // Imma head out SpongeBob
    "https://i.imgur.com/Fgo7nnZ.jpg", // Two buttons ArgoCD Helm 
    "https://i.imgur.com/pCjM1d6.jpg", // The bug in my pipeline Momoa Cavill 
    "https://i.imgur.com/kGQUUTw.jpg", // GitOps goosebumps
    "https://i.imgur.com/o4LuRu7.jpg", // Automation feelings of power
    "https://i.imgur.com/CnDPSpV.png", // Automate all the things
    "https://i.imgur.com/E0s8TW6.png", // We are not the same
    "https://i.imgur.com/xSmJv0k.png" // Automation everywhere
  ];
  
  function getRandomImage() {
    var index = Math.floor(Math.random() * images.length);
    var image = images[index];
    var displayElement = document.getElementById("display");
    displayElement.src = image;
    displayElement.style.display = "block";
  }
  
  var memeButton = document.getElementById("memeButton");
  memeButton.addEventListener("click", getRandomImage);
  
  async function fetchVisitorCount() {
    try {
      const response = await fetch('./api');
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const data = await response.json();
      console.log(data);
  
      document.getElementById("visitorCount").textContent = `Visits: ${data.count}`;
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  fetchVisitorCount();