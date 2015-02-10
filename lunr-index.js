
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["specification.html#the-canonical-text-services-protocol-version-50rc2"] = "The Canonical Text Services protocol, version 5.0.rc.2";
index.add({
    url: "specification.html#the-canonical-text-services-protocol-version-50rc2",
    title: "The Canonical Text Services protocol, version 5.0.rc.2",
    body: "# The Canonical Text Services protocol, version 5.0.rc.2 #  **Content**:  This document defines version 5.0.rc.2 of the Canonical Text Services protocol (CTS).  This specification incorporates by reference the Relax NG schemas identified below.  **Editors**:  Christopher Blackwell and Neel Smith, Center for Hellenic Studies Technical Working Group leads.  **Date**:  April, 2014.  **License**:  This specification and the associated Relax NG schemas are available under the terms of the Creative Commons Attribution-ShareAlike 4.0 International License, &lt;http://creativecommons.org/licenses/by-sa/4.0/deed.en_US&gt;.  "
});

documentTitles["specification.html#cts"] = "CTS";
index.add({
    url: "specification.html#cts",
    title: "CTS",
    body: "## CTS The Canonical Text Services protocol defines interaction between a client and server providing identification of texts and retrieval of canonically cited passages of texts.  "
});

documentTitles["specification.html#versions"] = "Versions";
index.add({
    url: "specification.html#versions",
    title: "Versions",
    body: "###  Versions *Release versions* are identified by two dot-separated integers, with the first being most significant. E.g., \&quot;2.0\&quot; is greater than \&quot;1.10\&quot; but \&quot;1.10\&quot; is greater than \&quot;1.2\&quot;.   An identifier for a pre-release version is composed of a regular release-version number followed by a dot-separated string indicating its test status (e.g., \&quot;1.2.beta\&quot; or \&quot;1.2.rc\&quot;). Optionally, the identifer for a test version may have a further positive integer indicating its sequence in that test series (e.g., \&quot;1.2.beta.2\&quot;).   Client applications may indicate a valid version number in the optional `version` parameter of the `GetCapabilities` request (see below). Use of a version parameter in client requests may be required in future versions of this protocol.   "
});

documentTitles["specification.html#client-server-communication"] = "Client-server communication";
index.add({
    url: "specification.html#client-server-communication",
    title: "Client-server communication",
    body: "## Client-server communication  An instance of a CTS implementation is addressable by a Uniform Resource Locator (URL), referred to hereafter as a CTS \&quot;base URL\&quot;.  CTS requests are formed by adding request parameters, as specified below, directly to the base URL.  More formally, the concatenation of the base URL with URL parameters must produce a valid URL according to the requirements of the URL specification [IETF RFC 2396][rfc2396].  Replies are formatted in XML validating against the reply schemas identified below.     [rfc2396]: http://www.ietf.org/rfc/rfc2396.txt  "
});

documentTitles["specification.html#discussion-non-normative"] = "Discussion (non-normative)";
index.add({
    url: "specification.html#discussion-non-normative",
    title: "Discussion (non-normative)",
    body: "### Discussion (non-normative) ###  While all implementations of CTS known to the authors to date have used HTTP as the transport protocol, this is not required by CTS.  It is conceivable, for example, that implementors might choose to implement CTS by exchanging requests and replies over a duplex protocol.  CTS does not specify what is returned from the base URL if no request parameters are supplied, but it is recommended that implementors return basic information identifying the service in plain text, markdown or XHTML format.  Note that the base URL could be a string like       http://myhost/mycts?    because directly adding valid CTS request parameters as defined in this document results in a valid URL under RFC 2396, e.g., `http://myhost/mycts?request=GetCapabilities` is  a valid URL.  Likewise,      http://myhost/mycts?configuration=default&amp;  is a valid base URL because the request `http://myhost/mycts?configuration=default&amp;request=GetCapabilities` is a valid URL.   "
});

documentTitles["specification.html#cts-request-parameters"] = "CTS request parameters";
index.add({
    url: "specification.html#cts-request-parameters",
    title: "CTS request parameters",
    body: "## CTS request parameters ##  "
});

documentTitles["specification.html#common-requirements"] = "Common requirements";
index.add({
    url: "specification.html#common-requirements",
    title: "Common requirements",
    body: "### Common requirements In a full CTS request URL, each parameter's name and value pair must be separated from any following parameters by an ampersand (\&quot;&amp;\&quot;, Unicode x0026); name and value for each individual parameter must be separated by an equals sign (\&quot;=\&quot;, Unicode x003D).  The characters \&quot;&amp;\&quot;,  \&quot;=\&quot;  and the solidus  (\&quot;/\&quot;, Unicode x002F) must not be used in the values of a CTS request parameter.  Parameter names and values are both case sensitive. Order of parameters in a request is not significant.   All CTS requests include a URL parameter named `request`. The value of this parameter must be the name of one the seven requests, `GetCapabilities`, `GetValidReff`,  `GetFirstUrn`,  `GetPrevNextUrn`, `GetLabel`, `GetPassage` or `GetPassagePlus`.  All requests other than `GetCapabilities` further require a parameter named `urn`.  The value of this parameter must be a valid CTS URN value, as defined in the [CTS URN specification][cts].  [cts]: http://www.homermultitext.org/hmt-docs/specifications/ctsurn    "
});

documentTitles["specification.html#getcapabilities"] = "GetCapabilities";
index.add({
    url: "specification.html#getcapabilities",
    title: "GetCapabilities",
    body: "### GetCapabilities  **Purpose**: The GetCapabilities request returns a reply that defines a corpus of texts known to the server and, for texts that are available online, identifies their citation schemes.  **Request syntax and semantics**:  No parameters other than the `request` parameter are required.  A request may optionally include a `version` parameter indicating the version of the protocol preferred by the client.  As of version 5.0.rc.2, CTS implementations are not required to recognize or alter their reply in response to a `version` parameter.   | Parameter |	Required/optional |	Description |   |  ------	| ------	| ------	|   |  request | required | the value `GetCapabilities` | |  version 	| optional |	Client may indicate preferred version of CTS protocol |     "
});

documentTitles["specification.html#getvalidreff"] = "GetValidReff";
index.add({
    url: "specification.html#getvalidreff",
    title: "GetValidReff",
    body: "### GetValidReff **Purpose**:   The GetValidReff request identifies all valid values for one on-line version of a requested work, up to a specified level of the citation hierarchy.  **Request syntax and semantics**:  The `urn` parameter identifies a text or a text passage.  If the work component of the URN is given at the notional work level, the implementation is free to supply valid reference values from any single online version of the work in its inventory.  If the URN includes a passage component, the reply must include only valid values contained in the requested passage.  The `level` parameter indicates how many levels of the citation hierarchy should be included in the reply.   | Parameter |	Required/optional |	Description |   |  ------	| ------	| ------	|   |   request | required | The value `GetValidReff` | | urn | required | Work, version or text passage for which to find valid references |   | level | required |  Number of levels of citation hierarchy to report |    "
});

documentTitles["specification.html#getfirsturn"] = "GetFirstUrn";
index.add({
    url: "specification.html#getfirsturn",
    title: "GetFirstUrn",
    body: "### GetFirstUrn ###  **Purpose**:   The `GetFirstUrn` request identifies, at the same level of the citation hierarchy as the `urn` parameter, the first citation node in a text.    **Request syntax and semantics**:   The `urn` parameter identifies a work, version or text passage.  If the work component of the URN is given at the notional work level, the implementation is free to return the first URN values from any single online version of the work in its inventory.   | Parameter |	Required/optional |	Description |   |  ------	| ------	| ------	|   | request | required | The value `GetFirstUrn` | | urn | required |  A work, version or text passage |   "
});

documentTitles["specification.html#getprevnexturn"] = "GetPrevNextUrn";
index.add({
    url: "specification.html#getprevnexturn",
    title: "GetPrevNextUrn",
    body: "### GetPrevNextUrn ###  **Purpose**:   The `GetPrevNextUrn` request identifies, at the same level of the citation hierarchy as the `urn` parameter, the  preceding and following citation nodes.    **Request syntax and semantics**:    The `urn` parameter identifies a text passage.  If the work component of the URN is given at the notional work level, the implementation is free to return preceding and following URN values from any single online version of the work in its inventory.  If the `urn` parameter identifies the first node in the text, the previous URN value will be a null string.  If the `urn` parameter identifies the last node in the text, the following URN value will be a null string.   | Parameter |	Required/optional |	Description |   |  ------	| ------	| ------	|   | request | required | The value `GetPrevNextUrn` | | urn | required | A citable passage of text |     "
});

documentTitles["specification.html#getlabel"] = "GetLabel";
index.add({
    url: "specification.html#getlabel",
    title: "GetLabel",
    body: "### GetLabel  **Purpose**: The `GetLabel` request retrieves a human-readable label describing a text or text passage.  **Request syntax and semantics**:  The `urn` parameter identifies a text group, a text or a text passage.  The contents of the returned label are not defined by CTS.  Implementations should return a descriptive string that is semantically comparable to the use of `rdfs:label` in [RDF Schema][rdfs].   [rdfs]: http://www.w3.org/TR/rdf-schema/  | Parameter |	Required/optional |	Description |   |  ------	| ------	| ------	|   | request | required | The value `GetLabel` | | urn | required | Text group, work, version or text passage to label |       "
});

documentTitles["specification.html#getpassage"] = "GetPassage";
index.add({
    url: "specification.html#getpassage",
    title: "GetPassage",
    body: "### GetPassage ###  **Purpose**:  The `GetPassage` request retrieves a passage of a text identified by a URN, optionally including a requested amount of adjacent context.  **Request syntax and semantics**:  The `urn` parameter identifies a text passage.  An optional `context` parameter may request a number of preceding and following citation units to include along with the requested urn.  It is not an error if the document contains fewer than `context` preceding units or following units. It is an error if the `context` parameter is not a positive integer.   | Parameter |	Required/optional |	Description |   |  ------	| ------	| ------	|   | request | required | The value `GetPassage` | | urn | required | Text passage to retrieve  | | context |   optional | Number of citation units, at the same level of the citation hierarchy as the requested urn, immediately preceding and immediately following  the requested urn to include in the reply  |        "
});

documentTitles["specification.html#getpassageplus"] = "GetPassagePlus";
index.add({
    url: "specification.html#getpassageplus",
    title: "GetPassagePlus",
    body: "### GetPassagePlus ###  **Purpose**:  The `GetPassagePlus` request retrieves a passage of a text identified by a URN, wrapped together with the information provided by the `GetLabel`, `GetPrevNextUrn`, `GetFirstUrn` and `GetValidReff` requests. Like `GetPassage`, the `GetPassagePlus` request may optionally include a requested amount of adjacent context.  **Request syntax and semantics**:  The `urn` parameter identifies a text passage.  An optional `context` parameter may request a number of preceding and following citation units to include along with the requested urn.  It is not an error if the document contains fewer than `context` preceding units or following units. It is an error if the `context` parameter is not a positive integer.  The `firsturn` element and the `label` element have the same meaning as the `GetFirstUrn` and `GetLabel` requests, respectively.  The `validreff` element must be empty if the requested CTS URN cites a single leaf node in the text's citation hierarchy;  if the requested CTS URN cites either a range of nodes or a single node at a non-leaf level of the hierarchy, the contents of the `validreff` element must be the same as the corresponding `GetValidReff` request.  The semantics of the `prevnext` element's content  depends on whether or not the optional `context` parameter is included.    When no `context` parameter is included, the contents of the `prevnext` element correspond to the meaning of `GetPrevNextUrn` request.  When a `context` parameter is included, the semantics of the `prevnext` element take account of the fact that up to `context` citation units could be included before or after the requested node.    If a `context` parameter is given, and there are at least `context` citation units prior to the request urn, then the `prev` element's `urn` element refers to the citable node that is `context` citation units before the first unit in the `passage` reply (that is, the node that is `2*context` citation units before the requested urn).  If there are fewer than `context` units but at least one unit before the requested urn, then the value of the `prev` element's `urn` element is the first urn of the text.    If a `context` parameter is given, and there are at least `context` citation units following the request urn, then the `next` element's `urn` element refers to the citable node that is `context` citation units after the first unit in the `passage` reply (that is, the node that is `2*context` citation units after the requested urn).  If there are fewer than `context` units but at least one unit after the requested urn, then the vaue of the `next` element's `urn` element is the last urn of the text.    Whether or not a `context` parameter is included, if the requested urn identifies the first node in the text, the value of the `prev` element's `urn` element must be a null string.  If the requested urn identifies the last node in the text, the value of the `next` element's `urn` element must be a null string.    | Parameter |	Required/optional |	Description |   |  ------	| ------	| ------	|   | request | required | The value `GetLabel` | | urn | required | Text passage to retrieve | | context |   optional | Number of citation units, at the same level of the citation hierarchy as the requested urn, immediately preceding and immediately following  the requested urn to include in the reply  |   "
});

documentTitles["specification.html#cts-replies"] = "CTS replies";
index.add({
    url: "specification.html#cts-replies",
    title: "CTS replies",
    body: "## CTS replies ##  The reply to a valid CTS request is always a well-formed XML document with a root element having the same name as the CTS request validating against one of the schemas identified below.  The reply to an invalid request validates against the schema `Error.rng`.  The XML namespace for all replies is `http://chs.harvard.edu/xmlns/cts/`.  In the rest of this document, this will be referred to with the abbreviation `cts:`  The reply document always contains exactly two elements, the first of which is named `request`. The contexts of the `request` element are unspecified, and may be used for any purpose the implementor wishes.  As the name of the element is intended to imply, it is strongly recommended that implementing software include in this element information about the parameters passed in with the request. Developers may also use this element for other purposes such as embedding debugging information in a reply that complies with the CTS specification.   If the syntax and contents of `request` parameters do not fully comply with the specifications in this document, the second element of the reply is named `CTSError`, and contains two elements, `message` and `code`.  The contents of the `message` should contain a human-readable description of the error, but is not otherwise specified.  The `code` element contains an integer with one of the following values:  | Error code | meaning   |  ------	| ------	|   | 1 | Request missing one or more required parameters | | 2 | Invalid URN syntax |   | 3 | Syntactically valid URN refers in invalid value   | 4 | Invalid value for `level` parameter in `GetValidReff` request |   | 5 | Invalid value for `context` parameter in `GetPassage` or `GetPassagePlus` request |   If the syntax and contents of request parameters fully comply with the specifications in this document, then the name and format of the second element vary according to the request, and are defined in the following sections.   "
});

documentTitles["specification.html#individual-replies"] = "Individual replies";
index.add({
    url: "specification.html#individual-replies",
    title: "Individual replies",
    body: "## Individual replies ##  While the Relax NG schema for each requests defines and can be used to enforce a number of the syntactic requirements of CTS, there are further requirements that cannont be readily defined in a schema language.  These are specified for each request in the following sections.   "
});

documentTitles["specification.html#getcapabilities"] = "GetCapabilities";
index.add({
    url: "specification.html#getcapabilities",
    title: "GetCapabilities",
    body: "### GetCapabilities ###  Each element in the XML hierarchy of `cts:textgroup`, `cts:work`, `cts:edition`  or `cts:translation`and `cts:exemplar` has a `urn` attribute identifying the unit.  Each urn value must be unique within the `GetCapabilities` reply.  Each urn must be a valid CTS URN value, and the CTS URN of the containing element must match this value up to the final component of the URN's work hierarchy.  The urn's CTS namespace must be previously defined in the `abbr` attribute of a `cts:ctsnamespace` element.  Many elements include `xml:lang` attributes, which must use 3-character codes from ISO 639-2 &lt;http://lcweb.loc.gov/standards/iso639-2/englangn.html&gt; or 3-character or longer codes from ISO 639-5 &lt;http://www.loc.gov/standards/iso639-5/id.php&gt;.  The semantics of the `xml:lang` attribute in a CTS `GetCapabilities` reply is:  - on elements giving names, titles and labels, `xml:lang` refers to the primary language of the content of the element - on the `cts:work` element, `xml:lang` refers to the primary language of the notional work - on the `cts:translation` elemet, `xml:lang` refers to the primary language of the translated version of the work.  `cts:edition` elements do not have an `xml:lang` attribute because an edition is defined as any identifiable version of a notional work that has the same primary language as the notional work.   "
});

documentTitles["specification.html#getvalidreff"] = "GetValidReff";
index.add({
    url: "specification.html#getvalidreff",
    title: "GetValidReff",
    body: "### GetValidReff ###  The core of the `GetValidReff` request is an ordered list of `cts:urn` elements.  The value of each element must be a valid CTS URN, and the list must be in document order.   Each URN must include a passage component identifying the version of the work as a specific edition or translation.  The citation level of the passage component must be equal to the citation level of the request urn.   "
});

documentTitles["specification.html#getprevnexturn"] = "GetPrevNextUrn";
index.add({
    url: "specification.html#getprevnexturn",
    title: "GetPrevNextUrn",
    body: "### GetPrevNextUrn ###  The `GetPrevNextUrn` reply includes two `cts:urn` elements.  The value of each element must be either empty, or a valid CTS URN.  If the value is not empty, it must include a passage component identifying the version of the work as a specific edition or translation.    "
});

documentTitles["specification.html#getfirsturn"] = "GetFirstUrn";
index.add({
    url: "specification.html#getfirsturn",
    title: "GetFirstUrn",
    body: "### GetFirstUrn ###  The `GetFirstUrn` reply includes one `cts:urn` element.  The value of this element must be a valid CTS URN and must include a passage component identifying the version of the work as a specific edition or translation.   "
});

documentTitles["specification.html#getlabel"] = "GetLabel";
index.add({
    url: "specification.html#getlabel",
    title: "GetLabel",
    body: "### GetLabel ##  The content of the `cts:label` element may have any text the implementor chooses.  Its contents should be comparable  to the value of a `rdfs:label` in RDF Schema.  Implementors are strongly encouraged to include as part of the `cts:label` contents separately labelled strings for any of the optional `ti:groupname`, `ti:title`, `ti:version` and `ti:citation` elements that are relevant.  "
});

documentTitles["specification.html#getpassage"] = "GetPassage";
index.add({
    url: "specification.html#getpassage",
    title: "GetPassage",
    body: "### GetPassage ##  The `GetPassage` reply includes one `cts:urn` element.  The value of this element must be a valid CTS URN identifying the content in the `cts:passage` element and must include a passage component identifying the version of the work as a specific edition or translation.  The content of the `cts:passage` consists of a passage of text from the edition or translation specified in the request urn, and may therefore be further structured or formatted in whatever manner was selected by the editor of the particular edition or translation.  The CTS implementation must ensure that including the contents of the requested in the `cts:passage` element results in well-formed XML.  "
});

documentTitles["specification.html#getpassageplus"] = "GetPassagePlus";
index.add({
    url: "specification.html#getpassageplus",
    title: "GetPassagePlus",
    body: "### GetPassagePlus ##  The `GetPassagePlus` reply includes one `cts:urn` element at the root of the `ti:request` element.  The value of this element must be a valid CTS URN identifying the content in the `cts:passage` element and must include a passage component identifying the version of the work as a specific edition or translation.  It includes two further `cts:urn` elements within the `prevnext` element. The value of each of these two elements must be either empty, or a valid CTS URN.  The content of the `cts:passage` consists of a passage of text from the edition or translation specified in the request urn, and may therefore be further structured or formatted in whatever manner was selected by the editor of the particular edition or translation.  The CTS implementation must ensure that including the contents of the requested in the `cts:passage` element results in well-formed XML.  As in the `GetLabel` request, implementors are strongly encouraged to include as part of the conents of the `cts:label` element separately labelled strings for any of the optional `ti:groupname`, `ti:title`, `ti:version` and `ti:citation` elements that are relevant.  "
});

documentTitles["specification.html#reply-schemas"] = "Reply schemas";
index.add({
    url: "specification.html#reply-schemas",
    title: "Reply schemas",
    body: "## Reply schemas ##  The published text of this specification in markdown notation is packaged with a directory of Relax NG schemas specifying the syntax of the seven defined CTS requests.  The schema with the corresponding name can be used to validate the syntax of a CTS reply (e.g., the `GetCapabilities.rng` schema can be used to validate the `GetCapabilities` reply).  "
});

documentTitles["specification.html#related"] = "Related";
index.add({
    url: "specification.html#related",
    title: "Related",
    body: "## Related ## `ctsvalidator` is a software package that is not part of the CTS specification, but may be used to assess the compliance of a CTS installation with version 5.0.rc.2 of the specification.   It is available from this github repository:   &lt;https://github.com/cite-architecture/ctsvalidator&gt;.  Clone the repository, and follow the instructions in the `README` file to load test data and run the validation tests.  "
});

documentTitles["specification.html#links"] = "Links";
index.add({
    url: "specification.html#links",
    title: "Links",
    body: "## Links  - The CTS URN specification: &lt;http://www.homermultitext.org/hmt-docs/specifications/ctsurn&gt;  - Maven settings for using the release version of this specification and its schemas from a maven client:      - group: `org.homermultitext`     - artifact: `cts_spec`     - version: `5.0` -  Nexus repository to proxy this release:  &lt;http://beta.hpcc.uh.edu/nexus/content/repositories/releases&gt;  -  Known mirrors of this specification:     - from the Homer Multitext project:  &lt;http://www.homermultitext.org/hmt-docs/specifications/cts&gt;     - from Furman University: &lt;http://folio.furman.edu/projects/citedocs/cts&gt;     - from the College of the Holy Cross:  &lt;http://shot.holycross.edu/hmt/hmt-docs/specifications/cts&gt;   "
});

documentTitles["specification.html#acknowledgments"] = "Acknowledgments";
index.add({
    url: "specification.html#acknowledgments",
    title: "Acknowledgments",
    body: "## Acknowledgments ##  Version 5.0.rc.2 is based on earlier CTS specifications from 2003-2013 with contributions from Lenny Muellner, Program Director of Publications and Information Technology at CHS, and:  - Jason Aftosmis - Bridget Almas - Hugh Cayless - Greg Crane - Tom Elliott - Ryan Gabbard - Andrew Gollan - Michael Gursky - Sebastian Heath - Uwe Kretschmer - Scott Mcphee - David Mimno - Neil Moore - Bruce Robertson - Jeff Rydberg-Cox - Ross Scaife - Jochen Tiepmar - John Wallrodt - Gabe Weaver "
});


