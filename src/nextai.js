var Nextai = {
    Neuron: require('./neuron'),
    Layer: require('./layer'),
    Network: require('./network'),
    Trainer: require('./trainer'),
    Architect: require('./architect')
};

// CommonJS & AMD
if (typeof define !== 'undefined' && define.amd)
{
  define([], function(){ return Nextai });
}

// Node.js
if (typeof module !== 'undefined' && module.exports)
{
  module.exports = Nextai;
}

// Browser
if (typeof window == 'object')
{
  (function(){
    var oldNextai = window['nextai'];
    Nextai.ninja = function(){
      window['nextai'] = oldNextai;
      return Nextai;
    };
  })();

  window['nextai'] = Nextai;
}
