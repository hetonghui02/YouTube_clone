from flask import Flask, render_template
from typing import List, Dict

app = Flask(__name__)

class Video:
    def __init__(self, title: str, description: str, category: str, thumbnail_url: str, video_url: str):
        self.title = title
        self.description = description
        self.category = category
        self.thumbnail_url = thumbnail_url
        self.video_url = video_url

class User:
    def __init__(self, username: str):
        self.username = username
        self.subscriptions: List[Video] = []
        self.playlists: List[Video] = []

    def subscribe(self, video: Video):
        self.subscriptions.append(video)

    def addToPlaylist(self, video: Video):
        self.playlists.append(video)

class WebPage:
    def __init__(self, user: User):
        self.recommended_videos: List[Video] = []
        self.search_results: List[Video] = []
        self.categories: Dict[str, List[Video]] = {}
        self.user = user

    def recommendVideos(self):
        pass

    def searchVideos(self, query: str):
        pass

    def getVideosByCategory(self, category: str):
        pass

    def switchToDarkMode(self):
        pass

@app.route('/')
def index():
    user = User('test_user')
    video = Video('test_title', 'test_description', 'test_category', 'test_thumbnail_url', 'test_video_url')
    user.subscribe(video)
    user.addToPlaylist(video)
    webpage = WebPage(user)
    webpage.recommended_videos.append(video)
    return render_template('index.html', recommended_videos=webpage.recommended_videos, user=user)

if __name__ == '__main__':
    app.run(host="172.24.12.11",port=41977,debug=True)

