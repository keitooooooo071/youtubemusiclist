$(function()
{
    $('.btn').on('click', function()
    {
        const random_music = Math.floor(Math.random() * music_list.length);
        console.log(random_music);
        const getMusic = music_list[random_music];
        $('.text').text(getMusic['name']);
        $('.link').attr("href", getMusic['URL'] );
    });
});