define(function(require, exports) {
  exports.list = [
  // example for types and print
  [
    ["print", ["number", "2"]],
    ["print", ["string", "2"]],
    ["print", ["list", ["string", "2"],
      ["number", "2"]
    ]],
    ["print", ["json", ["2", ["number", "2"]],
      ["22", ["string", "22"]],
      ["222", ["list", ["number", "2"]]]
    ]],
    ["print", ["bool", "1"],
      ["bool", "yes"],
      ["bool", "no\t"]
    ]
  ],
    [
      ["set", "a", ["number", "3"]],
      ["set", "b", ["number", "4"]],
      ["print", ["add", "a", "b"],
        ["add", "a", ["number", "5"]]
      ],
      ["print", ["minus", ["add", "a", "b"], "a"]],
      ["set", "c", ["add", "a", "b"]],
      ["print", ["larger", "c", "a", "\t"]]
    ],
    ['\t'],
    // example for mess
    [
      ["set", "zero", ["string", ["nothing inside\t"]]],
      ["set", "a", ["mess", "print", ["string", ["~not~macro", "get", "zero"]]]],
      ["read", ["get", "a"]],
      ["print", ["number", "2"]]
    ]
  ];

});