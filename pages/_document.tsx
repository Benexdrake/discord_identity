
import Document, {Html, Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document
{
    render()
    {
        return (
            <Html>
                <Head/>
                <body>
                    
                    <Main/>
                    <NextScript/>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossOrigin="anonymous"></script>
                </body>
            </Html>
        )    
    }
}