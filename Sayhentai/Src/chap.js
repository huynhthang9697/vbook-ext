function execute(url) {
url = url.replace("sayhentai.vip","sayhentai.me")
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        var imgs = [];
        doc.select("#chapter_content img").forEach(e => imgs.push(e.attr("src")));
        return Response.success(imgs);
    }
    return null;
}