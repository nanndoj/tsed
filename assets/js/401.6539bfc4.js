(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{841:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jsondeserializeroptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsondeserializeroptions"}},[t._v("#")]),t._v(" JsonDeserializerOptions "),a("Badge",{attrs:{text:"Interface",type:"interface"}})],1),t._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { JsonDeserializerOptions } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/json-mapper"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.18.0/packages/json-mapper/src/utils/deserialize.ts#L0-L0"}},[t._v("/packages/json-mapper/src/utils/deserialize.ts")])])])])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" JsonDeserializerOptions<T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(" = ")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(" = ")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/interfaces/MetadataTypes.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("MetadataTypes")])]),t._v("<T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" C> "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    /**\n     * Types used to map complex types "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     */\n    types?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Map<"),a("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/json-mapper/interfaces/JsonMapperMethods.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("JsonMapperMethods")])]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * useAlias mapping\n     */\n    useAlias?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Accept additionalProperties or ignore it\n     */\n    additionalProperties?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * "),a("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/method/Use.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Use")])]),t._v(" the store which have all metadata to deserialize correctly the model. This\n     * property is useful when you deal with metadata parameters.\n     */\n    store?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonEntityStore.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("JsonEntityStore")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     *\n     */\n    groups?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" | false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),t._v(" "),a("h2",{attrs:{id:"members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[t._v("#")]),t._v(" Members")]),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("types?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Map<"),a("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/json-mapper/interfaces/JsonMapperMethods.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("JsonMapperMethods")])]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("Types used to map complex types (Symbol, Array, Set, Map)")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("useAlias?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("useAlias mapping")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("additionalProperties?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("Accept additionalProperties or ignore it")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("store?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonEntityStore.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("JsonEntityStore")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("Use the store which have all metadata to deserialize correctly the model. This\nproperty is useful when you deal with metadata parameters.")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("groups?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" | false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);