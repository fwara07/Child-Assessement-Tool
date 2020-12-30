from flask import Blueprint, render_template, request, redirect, url_for
from flask_login import login_required, current_user
from . import db

main = Blueprint("main", __name__)


@main.route("/")
def index():
    if current_user.is_authenticated:
        return redirect(url_for("main.home"))

    return render_template("index.html")


@main.route("/tool")
def tool():
    return render_template("tool.html")


@main.route("/home")
def home():
    return render_template("home.html")


@main.route("/results")
def results():
    return render_template("results.html")
