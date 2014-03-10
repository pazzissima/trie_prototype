Trie = function() {
  //this.characters = {};
  this.children = {};
  this.terminal = false;
};

Trie.prototype.learn = function(word, index) {
  if (word.length > index) {
    var character = word.charAt(index); //the nth character of the string
    var child = this.children[character] || new Trie();
    child.learn(word, index + 1)
    this.children[character] = child;
  } else {
    this.terminal = true;
  }

  // This function should add the given word,
  // starting from the given index,
  // to this Trie.

  // It will be recursive.  It will tell
  // the correct child of this Trie to learn the word
  // starting from a later index.

  // Consider what the learn function should do
  // when it reaches the end of the word?
  // A word does not necessarily end at a leaf.
  // You must mark nodes which are the ends of words,
  // so that the words can be reconstructed later.
};

Trie.prototype.getWords = function(words, currentWord) {
  words = words || [];
  currentWord = currentWord || "";

  if (this.terminal) {
    words.push(currentWord);
  }

  for (var character in children) {
    children[character].getWords(words, currentWord + character);
  }

  return words;


//  }
  // This function will return all the words which are
  // contained in this Trie.
  // it will use currentWord as a prefix,
  // since a Trie doesn't know about its parents.
};

Trie.prototype.find = function(word, index) {
  if (word.length == index) {
    return this;
  }

  return children[word[index]].find(word, index + 1);


  // This function will return the node in the trie
  // which corresponds to the end of the passed in word.

  // Be sure to consider what happens if the word is not in this Trie.
};

Trie.prototype.autoComplete = function(prefix) {
  var parent = this.find(prefix, 0);
  return parent.getWords([], prefix);

  // This function will return all completions 
  // for a given prefix.
  // It should use find and getWords.
};





