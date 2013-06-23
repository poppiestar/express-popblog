express-popblog
===============

A module for express that implements a basic blog.

It assumes it is the only blog that exists in the application and there is only one author.

Comments are not supported.

Reading articles requires no authentication, posting/editing articles does.

Authentication TBD.

RSS feed

API
===

Article collections
-------------------

GET /blog

Returns a list of all the articles in the blog.

GET /blog/:year

Returns all articles published in the specified year.

GET /blog/:year/:month

Returns all articles published in the specified year and month.

GET /blog/:year/:month/:day

Returns all articles published in the specified year, month and day.


Article details
---------------

GET /blog/:year/:month/:slug

Returns the article published on the year and month specified, with the specified slug.


Blog Post object
================

title
published (boolean)
slug
status

created date
last edited date
published date

text content

tags


Persistence
===========

Uses mongodb for now. Articles are stored as documents.

