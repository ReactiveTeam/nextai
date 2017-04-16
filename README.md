NextAI
========

NextAI is a javascript neural network library for **node.js** and the **browser**, its generalized algorithm is architecture-free, so you can build and train basically any type of first order or even [second order neural network](http://en.wikipedia.org/wiki/Recurrent_neural_network#Second_Order_Recurrent_Neural_Network) architectures.

This library includes a few built-in architectures like [multilayer perceptrons](http://en.wikipedia.org/wiki/Multilayer_perceptron), [multilayer long-short term memory](http://en.wikipedia.org/wiki/Long_short_term_memory) networks (LSTM), [liquid state machines](http://en.wikipedia.org/wiki/Liquid_state_machine) or [Hopfield](http://en.wikipedia.org/wiki/Hopfield_network) networks, and a trainer capable of training any given network, which includes built-in training tasks/tests like solving an XOR, completing a Distracted Sequence Recall task or an [Embedded Reber Grammar](http://www.willamette.edu/~gorr/classes/cs449/reber.html) test, so you can easily test and compare the performance of different architectures.


The algorithm implemented by this library has been taken from Derek D. Monner's paper:

[A generalized LSTM-like training algorithm for second-order recurrent neural networks](http://www.overcomplete.net/papers/nn2012.pdf)


There are references to the equations in that paper commented through the source code.

## Contribute

Firstly, read the Code of Conduct based upon the Contributor Covenant [here](http://contributor-covenant.org/)

Finding bugs, sending pull requests or improving our docs - any contribution is welcome and highly appreciated. To get started, head over to our [contribution guidelines](CONTRIBUTING.md). Thanks!

## Authors

* **Haikal Izzuddin** - [webhaikal](https://github.com/webhaikal)

See also the list of [contributors](https://github.com/reactiveteam/nextai/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
