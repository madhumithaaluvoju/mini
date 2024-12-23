let songDataset = {
    "johnny": {
      "title": "Johnny Johnny Yes Papa",
      "lyrics": [
        "Johnny, Johnny, yes Papa",
        "Eating sugar? No Papa",
        "Telling lies? No Papa",
        "Open your mouth! Ha ha ha"
      ]
    },
    "twinkle": {
      "title": "Twinkle Twinkle Little Star",
      "lyrics": [
        "Twinkle, twinkle, little star",
        "How I wonder what you are",
        "Up above the world so high",
        "Like a diamond in the sky",
        "Twinkle, twinkle, little star",
        "How I wonder what you are"
      ]
    },
    "row": {
    "title": "Row, Row, Row Your Boat",
    "lyrics": [
      "Row, row, row your boat",
      "Gently down the stream",
      "Merrily, merrily, merrily, merrily",
      "Life is but a dream"
    ]
    // Add other songs here
  },
  "wheels": {
    "title": "The Wheels on the Bus",
    "lyrics": [
      "The wheels on the bus go round and round",
      "Round and round, round and round",
      "The wheels on the bus go round and round",
      "All through the town",
      "The wipers on the bus go swish, swish, swish",
      "Swish, swish, swish, swish, swish, swish",
      "The wipers on the bus go swish, swish, swish",
      "All through the town"
    ]
  },
  "baby": {
    "title": "Hush, Little Baby",
    "lyrics": [
      "Hush, little baby, don't say a word",
      "Papa's gonna buy you a mockingbird",
      "And if that mockingbird won't sing",
      "Papa's gonna buy you a diamond ring",
      "And if that diamond ring turns brass",
      "Papa's gonna buy you a looking glass",
      "And if that looking glass gets broke",
      "Papa's gonna buy you a billy goat"
    ]
  },
  "bingo": {
    "title": "Bingo",
    "lyrics": [
      "There was a farmer had a dog",
      "And Bingo was his name-o",
      "B-I-N-G-O",
      "B-I-N-G-O",
      "B-I-N-G-O",
      "And Bingo was his name-o"
    ]
  },
  "happy": {
    "title": "If You're Happy and You Know It",
    "lyrics": [
      "If you're happy and you know it, clap your hands",
      "If you're happy and you know it, clap your hands",
      "If you're happy and you know it, then your face will surely show it",
      "If you're happy and you know it, clap your hands"
    ]
  },
  "mary": {
    "title": "Mary Had a Little Lamb",
    "lyrics": [
      "Mary had a little lamb",
      "Its fleece was white as snow",
      "And everywhere that Mary went",
      "The lamb was sure to go"
    ]
  }
};
  
  function getSongLyrics() {
    const songTitle = document.getElementById("songInput").value.toLowerCase().replace(/ /g, "_");
    const songContainer = document.getElementById("songLyrics");
  
    if (songDataset[songTitle]) {
      songContainer.innerHTML = `<h3>${songDataset[songTitle].title}</h3>`;
      songDataset[songTitle].lyrics.forEach(line => {
        songContainer.innerHTML += `<p>${line}</p>`;
      });
  
      // Call the function to sing the lyrics
      singLyrics(songDataset[songTitle].lyrics);
    } else {
      songContainer.innerHTML = `<p>Sorry, no lyrics found for the song titled <strong>${songTitle.replace(/_/g, " ")}</strong>.</p>`;
    }
  }
  
  function singLyrics(lyrics) {
    const synth = window.speechSynthesis;
    let utterance = new SpeechSynthesisUtterance();
  
    // Set pitch, rate, and volume to simulate singing
    utterance.pitch = 5.0; // Higher pitch to sound more "singing"
    utterance.rate = 1.0;  // Slower rate for singing
    utterance.volume = 1;  // Full volume
  
    // Loop through each lyric line and speak them one by one
    lyrics.forEach((line, index) => {
      // Delay each line slightly to simulate a rhythm
      setTimeout(() => {
        utterance.text = line;  // Set the text to be spoken
        synth.speak(utterance);  // Speak the text
      }, index * 3000);  // 3 seconds delay between each line
    });
  }
  