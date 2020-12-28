from flask import Blueprint, render_template, redirect, url_for, request, flash
from flask_login import login_user, logout_user, login_required
from .models import User
from . import db

auth = Blueprint('auth', __name__)


@auth.route('/login')
def login():
    return render_template('login.html')


@auth.route('/signup')
def signup():
    return render_template('signup.html')


@login_required
@auth.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('main.index'))


@auth.route('/signup', methods=['POST'])
def signup_post():
    errors = False
    email = request.form.get('email', None)
    role = request.form.get('role', None)

    user = User.query.filter_by(email=email).first()

    if role is None:
        flash('Please select a role')
        errors = True

    if email is None:
        flash('Please enter a valid email')
        errors = True

    if user:
        flash('Email adress already exists. Go to Loging Page')
        errors = True

    new_user = User(email=email, role=role)

    db.session.add(new_user)
    db.session.commit()

    if errors:
        return redirect(url_for('auth.signup'))
    else:
        return redirect(url_for('auth.login'))


@auth.route('/login', methods=['POST'])
def login_post():
    email = request.form.get('email')
    remember = True if request.form.get('remember') else False

    user = User.query.filter_by(email=email).first()

    if not user.email:
        flash('Please check your login credentials and try again.')
        return redirect(url_for('auth.login'))

    login_user(user, remember=remember)
    return redirect(url_for('main.home'))
