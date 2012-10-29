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
  // data types and and calculation
  [
    ["set", "a", ["number", "3"]],
    ["set", "b", ["number", "4"]],
    ["print", ["add", "a", "b"],
      ["add", "a", ["number", "5"]]
    ],
    ["print", ["minus", ["add", "a", "b"], "a"]],
    ["set", "c", ["add", "a", "b"]],
    ["print", ["larger", "c", "a"]],
    ["print", ["string", "string with space inside!!\t"]]
  ],
  // function scopes and JSON
  [
    ["set", "json1", ["json", ["a", ["number", "1"]]]],
    ["set", "json2", ["json", ["a", ["number", "2"]]]],
    ["under", "json1", ["set", "b", ["number", "11"]],
      ["print", "a", "b"]
    ],
    ["inside", "json2", ["set", "b", ["number", "22"]],
      ["print", "a", "b"]
    ],
    ["print", "json1", "json2\t"]
  ],
  // function and anoymous function
  [
    ["define", ["f1", "x", "y"],
      ["print", "x", "y"]
    ],
    ["set", "f2", ["lambda", ["x", "y"],
      ["print", "x", "y"]
    ]],
    ["f1", ["number", "3"],
      ["number", "4"]
    ],
    ["f2", ["number", "3"],
      ["number", "4"]
    ],
    ["define", ["f3"],
      ["lambda", ["x"],
        ["add", ["get", "x"],
          ["number", "1"]
        ]
      ]
    ],
    ["set", "tmp", ["f3"]],
    ["print", "tmp", ["number", "5\t"]]
  ],
    [
      ["set", "a", ["number", "1"]],
      ["define", ["f1"],
        ["print", "a"]
      ],
      ["task", ["t1"],
        ["print", "a"]
      ],
      ["under", ["json", ["a", ["number", "2"]]],
        ["f1"],
        ["t1"]
      ],
      ["f1"],
      ["t1\t"]
    ],
    [
      ["set", "1", ["number", "1"]],
      ["set", "2", ["number", "2"]],
      ["set", "3", ["number", "3"]],
      ["define", ["f1", "n"],
        ["if", ["smaller", "n", "3"], "1", ["add", ["f1", ["minus", "n", "1"]],
          ["f1", ["minus", "n", "2"]]
        ]]
      ],
      ["print", ["f1", ["number", "8"]]],
      ["if", ["smaller", "2", "3"],
        ["do", ["print", "1"],
          ["print", "2"],
          ["print", "3\t"]
        ]
      ]
    ],
    [
      ["define", ["handle-list", "item"],
        ["print", "item"]
      ],
      ["define", ["handle-json", "key", "value"],
        ["print", "key", "value"]
      ],
      ["set", "list1", ["list", ["number", "1"],
        ["number", "2"],
        ["number", "3"]
      ]],
      ["each", "list1", "handle-list"],
      ["set", "json1", ["json", ["k1", ["number", "1"]],
        ["k2", ["number", "2"]]
      ]],
      ["pair", "json1", "handle-json\t"]
    ],
    // example for mess
    [
      ["set", "d", ["data", "print", ["string", "just a demo", "\t"]]],
      ["print", "d"],
      ["read", "d"],
      ["set", "zero", ["string", ["nothing inside"]]],
      ["set", "a", ["mess", "print", ["string", ["~not~macro", "get", "zero"]]]],
      ["read", ["get", "a"]],
      ["print", ["number", "2"]]
    ],
    ['\t']
  ];

});