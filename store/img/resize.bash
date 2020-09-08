find ./ -type f -iname "*.jpeg" -exec mogrify -verbose -format jpeg -layers Dispose -resize 300\>x300\> -quality 75% {} +
find ./ -type f -iname "*.jpg" -exec mogrify -verbose -format jpg -layers Dispose -resize 300\>x300\> -quality 75% {} +
find ./ -type f -iname "*.png" -exec mogrify -verbose -format png -alpha on -layers Dispose -resize 300\>x300\> {} +