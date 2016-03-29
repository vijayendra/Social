Social Networking
=================

Sample social network forum build using Django REST APIs, Bootstrap and AngularJS.

Followed https://github.com/brwr/thinkster-django-angular.git as a reference point based on the tutorial https://thinkster.io/brewer/angular-django-tutorial/

## Installation

* `$ git clone git@github.com:vijayendra/Social.git`
* `$ virtualenv venv`
* `$ cd Social`
* `$ source venv/bin/activate`
* `$ pip install -r requirements.txt`
* `$ npm install`
* `$ bower install`
* `$ python manage.py migrate`
* `$ python manage.py runserver`

## Deployment

*NOTE: Requires [Heroku Toolbelt](https://toolbelt.heroku.com/).*

* `$ heroku apps:create`
* `$ heroku addons:create heroku-postgresql:hobby-dev`
* `$ heroku config:set BUILDPACK_URL=https://github.com/ddollar/heroku-buildpack-multi.git`
* `$ heroku config:set DEBUG=False`
* `$ heroku config:set COMPRESS_ENABLED=True`
* `$ git push heroku master`
* `$ heroku open`


