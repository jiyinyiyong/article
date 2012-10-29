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
      ["print", ["larger", "c", "a"]],
      ["print", ["string", "string with space inside!!\t"]]
    ],
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