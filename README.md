# Lorem Generator
The Lorem Generator is a command-line tool built with Node.js that generates random lorem ipsum text. It provides various options to generate either a single random sentence or a paragraph consisting of multiple random sentences.

## Installation
To install the Lorem Generator, follow these steps:

1. Clone the repository: `git clone https://github.com/jfirme-sys/lorem-gen.git`
2. Navigate to the project directory: `cd lorem-generator`
3. Install dependencies: `npm install`
4. Install the tool globally: `npm install -g`

## Usage
Once installed, you can use the Lorem Generator via the command line with the lorem command.


### Generate a Random Sentence
To generate a random sentence, use the following command:

```
lorem -s
```

This will output a single random sentence.


## Generate a Paragraph of Random Sentences
To generate a paragraph consisting of multiple random sentences, use the following command:

```
lorem -s -c <number>
```

Replace <number> with the desired number of sentences in the paragraph. This will generate a paragraph containing the specified number of random sentences.

## Help
To display the help message and usage instructions, use the following command:

```
  lorem -h
 ```

This will show the available options and their descriptions.

## License
The Lorem Generator is open-source software licensed under the MIT License.
