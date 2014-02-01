# The Canonical Text Services protocol, version 5.0.rc.1 #

**Content**:  This document defines version 5.0.rc.1 of the Canonical Text Services protocol (CTS).  This specification incorporates by reference the Relax NG schemas identified below.

**Editors**:  Christopher Blackwell and Neel Smith, Center for Hellenic Studies Technical Working Group leads.

**Date**:  February, 2014.

**License**:  This specification and the associated Relax NG schemas are avaiable under the terms of the Creative Commons Attribution-ShareAlike 4.0 International License, <http://creativecommons.org/licenses/by-sa/4.0/deed.en_US>.

## CTS
The Canonical Text Services protocol defines interaction between a client and server providing identification of texts and retrieval of canonically cited passages of texts.

###  Versions
*Release versions* are identified by two dot-separated integers, with the first being most significant. E.g., "2.0" is greater than "1.10" but "1.10" is greater than "1.2". 

An identifier for a pre-release version is composed of a regular release-version number followed by a dot-separated string indicating its test status (e.g., "1.2.beta" or "1.2.rc"). Optionally, the identifer for a test version may have a further positive integer indicating its sequence in that test series (e.g., "1.2.beta.2"). 

Client applications may indicate a valid version number in the optional `version` parameter of the `GetCapabilities` request (see below). Use of a version parameter in client requests may be required in future versions of this protocol. 


## Client-server communication

An instance of a CTS implementation is addressable by a Uniform Resource Locator (URL), referred to hereafter as a CTS "base URL".  CTS requests are formed by adding request parameters, as specified below, directly to the base URL.  More formally, the concatenation of the base URL with URL parameters must produce a valid URL according to the requirements of the URL specification [IETF RFC 2396][rfc2396].  Replies are formatted in XML validating against the reply schemas identified below.  



[rfc2396]: http://www.ietf.org/rfc/rfc2396.txt

### Discussion (non-normative) ###

While all implementations of CTS known to the authors to date have used HTTP as the transport protocol, this is not required by CTS.  It is conceivable, for example, that implementors might choose to implement CTS by exchanging requests and replies over a duplex protocol.

CTS does not specify what is returned from the base URL if no request parameters are supplied, but it is recommended that implementors return basic information identifying the service in plain text, markdown or XHTML format.

Note that the base URL could be a string like 

    http://myhost/mycts?
  
because directly adding valid CTS request parameters as defined in this document results in a valid URL under RFC 2396, e.g., `http://myhost/mycts?request=GetCapabilities` is  a valid URL.  Likewise,

    http://myhost/mycts?configuration=default&

is a valid base URL because the request `http://myhost/mycts?configuration=default&request=GetCapabilities` is a valid URL. 

## CTS request parameters ##

### Common requirements
In a full CTS request URL, each parameter's name and value pair must be separated from any following parameters by an ampersand ("&", Unicode x0026); name and value for each individual parameter must be separated by an equals sign ("=", Unicode x003D).  The characters "&",  "="  and the solidus  ("/", Unicode x002F) must not be used in the values of a CTS request parameter.  Parameter names and values are both case sensitive. Order of parameters in a request is not significant. 

All CTS requests include a URL parameter named `request`. The value of this parameter must be the name of one the six requests, `GetCapabilities`, `GetValidReff`,`GetPrevNextUrn`, `GetLabel`, `GetPassage` or `GetPassagePlus`.

All requests other than `GetCapabilities` further require a parameter named `urn`.  The value of this parameter must be a valid CTS URN value, as defined in the [CTS URN specification][cts].

[cts]: http://www.homermultitext.org/hmt-docs/specifications/ctsurn



### GetCapabilities

**Purpose**: The GetCapabilities request defines a corpus of texts known to the server and, for texts that are available  online, identifies their citation schemes.

**Request syntax and semantics**:  No parameters other than the `request` parameter are required.  A request may optionally include a `version` parameter indicating the version of the protocol preferred by the client.  As of version 5.0.rc.1, CTS implementations are not required to recognize or alter their reply in response to a `version` parameter. 

| Parameter |	Required/optional |	Description |  
|  ------	| ------	| ------	|  
|  request | required | the value `GetCapabilities` |
|  version 	| optional |	Client may indicate preferred version of CTS protocol |  


### GetValidReff
**Purpose**:   The GetValidReff request identifies all valid values for one on-line version of a requested work, up to a specified level of the citation hierarchy.

**Request syntax and semantics**:  The `urn` parameter identifies a text or a text passage.  If the work component of the URN is given at the notional work level, the implementation is free to supply valid reference values from any single online version of the work in its inventory.  If the URN includes a passage component, the reply must include only valid values contained in the requested passage.  The `level` parameter indicates how many levels of the citation hierarchy should be included in the reply.


| Parameter |	Required/optional |	Description |  
|  ------	| ------	| ------	|  
|   request | required | The value `GetValidReff` |
| urn | required | Work, version or text passage for which to find valid references |  
| level | required |  Number of levels of citation hierarchy to report |  



### GetPrevNextUrn ###

**Purpose**:   The `GetPrevNextUrn` request identifies, at the same level of the citation hierarchy as the `urn` parameter, the  preceding and following citation node.  

**Request syntax and semantics**:    The `urn` parameter identifies a text passage.  If the work component of the URN is given at the notional work level, the implementation is free to return preceding and following URN values from any single online version of the work in its inventory.  If the `urn` parameter identifies the first next in the text, the previous URN value will be a null string.  If the `urn` parameter identifies the last next in the text, the following URN value will be a null String. 

| Parameter |	Required/optional |	Description |  
|  ------	| ------	| ------	|  
| request | required | The value `GetValidReff` |
| urn | required | A citable passage of text |  


### GetLabel

**Purpose**: The `GetLabel` request retrieves a human-readable label describing a text or text passage.

**Request syntax and semantics**:  The `urn` parameter identifies a text group, a text or a text passage.  The contents of the returned label are not defined by CTS.  Implementations should return a descriptive string that is semantically comparable to the use of `rdfs:label` in [RDF Schema][rdfs].


[rdfs]: http://www.w3.org/TR/rdf-schema/

| Parameter |	Required/optional |	Description |  
|  ------	| ------	| ------	|  
| request | required | The value `GetLabel` |
| urn | required | Text group, work, version or text passage to label |  




### GetPassage ###

**Purpose**:  The `GetPassage` request retrieves a passage of a text identified by a URN, optionally including a requested amount of adjacent context.

**Request syntax and semantics**:  The `urn` parameter identifies a text passage.  An optional `context` parameter may request a number of preceding and following citation units to include along with the requested urn.  It is not an error if the document contains fewer than `context` preceding units or following units. It is an error if the `context` parameter is not a positive integer.


| Parameter |	Required/optional |	Description |  
|  ------	| ------	| ------	|  
| request | required | The value `GetLabel` |
| urn | required | Text passage to retrieve  |
| context |   optional | Number of citation units, at the same level of the citation hierarchy as the requested urn, immediately preceding and immediately following  the requested urn to include in the reply  |




 

### GetPassagePlus ###

**Purpose**:  The `GetPassagePlus` request retrieves a passage of a text identified by a URN, wrapped together with the information provided by the `GetLabel` and `GetPrevNextUrn` requests. Like `GetPassage`, the `GetPassagePlus` request may optionally include a requested amount of adjacent context.

**Request syntax and semantics**:  The `urn` parameter identifies a text passage.  An optional `context` parameter may request a number of preceding and following citation units to include along with the requested urn.  It is not an error if the document contains fewer than `context` preceding units or following units. It is an error if the `context` parameter is not a positive integer.

| Parameter |	Required/optional |	Description |  
|  ------	| ------	| ------	|  
| request | required | The value `GetLabel` |
| urn | required | Text passage to retrieve |
| context |   optional | Number of citation units, at the same level of the citation hierarchy as the requested urn, immediately preceding and immediately following  the requested urn to include in the reply  |


## CTS replies ##

The reply to a CTS request is always a well-formed XML document with a root element having the same name as the CTS request.  The XML namespace for all replies is `http://chs.harvard.edu/xmlns/cts/`.  In the rest of this document, this will be referred to with the abbreviation `ti:`

The reply document always contains exactly two elements, the first of which is named `request`. The contexts of the `request` element are unspecified, and may be used for any purpose the implementor wishes.  As the name of the element is intended to imply, it is strongly recommended that implementing software include in this element information about the parameters passed in with the request. Developers may also use this element for other purposes such as embedding debugging information in a reply that complies with the CTS specification. 

If the syntax and contents of `request` parameters do not fully comply with the specifications in this document, the second element of the reply is named `error`;  the format and content of error reporting are left up to the implementing software.  Future versions of the protocol may define structures for error reporting. 

If the syntax and contents of request parameters fully comply with the specifications in this document, then the name and format of the second element vary according to the request, and are defined in the following sections. 

## Individual replies ##

While the Relax NG schema for each requests defines and can be used to enforce a number of the syntactic requirements of CTS, there are further requirements that cannont be readily defined in a schema language.  These are specified for each request in the following sections.


### GetCapabilities ###

Each element in the XML hierarchy of `ti:textgroup`, `ti:work`, `ti:edition`  or `ti:translation`and `ti:exemplar` has a `urn` attribute identifying the unit.  Each urn value must be unique within the `GetCapabilities` reply.  Each urn must be a valid CTS URN value, and the CTS URN of the containing element must match this value up to the final component of the URN's work hierarchy.  The urn's CTS namespace must be previously defined in the `abbr` attribute of a `ti:ctsnamespace` element.

Many elements include `xml:lang` attributes, which must use 3-character codes from ISO 639-2 <http://lcweb.loc.gov/standards/iso639-2/englangn.html> or 3-character or longer codes from ISO 639-5 <http://www.loc.gov/standards/iso639-5/id.php>.  The semantics of the `xml:lang` attribute in a CTS `GetCapabilities` reply is:

- on elements giving names, titles and labels, `xml:lang` refers to the primary language of the content of the element
- on the `ti:work` element, `xml:lang` refers to the primary language of the notional work
- on the `ti:translation` elemet, `xml:lang` refers to the primary language of the translated version of the work.  `ti:edition` elements do not have an `xml:lang` attribute because an edition is defined as any identifiable version of a notional work that has the same primary language as the notional work.


### GetValidReff ###


### GetPrevNextUrn ###


### GetLabel ###

### GetLabel ##

### GetPassage ##

### GetPassagePlus ##



## Reply schemas ##

The published text of this specification in markdown notation is packaged with a directory of Relax NG schemas specifying the syntax of the six defined CTS requests.

## Related ##

The CTS validator

## Acknowledgments ##

Version 5.0.rc.1 is based on earlier CTS specifications from 2003-2013 with contributions from Lenny Muellner, Program Director of Publications and Information Technology at CHS, and:

- Jason Aftosmis
- Hugh Cayless
- Tom Elliott
- Ryan Gabbard
- Andrew Gollan
- Sebastian Heath
- Scott Mcphee
- David Mimno
- Neil Moore
- Bruce Robertson
- Jeff Rydberg-Cox
- Ross Scaife
- John Wallrodt
- Gabe Weaver



 ## Links

1. Relax NG schemas
2. CTS Validator

