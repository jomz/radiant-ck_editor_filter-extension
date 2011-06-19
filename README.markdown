Radiant *CKEditor Filter* Extension
===================================

<table>
    <tr>
        <td>Author</td>
        <td>Benny Degezelle - <a href="http://www.gorilla-webdesign.be">Gorilla Webdesign</a></td>
    </tr>
    <tr>
        <td>Version</td>
        <td>0.2.3</td>
    </tr>
    <tr>
        <td>Contact:</td>
        <td>benny AT gorilla-webdesign DOT be</td>
    </tr>
</table>

This filter adds CKEditor to [Radiant](http://www.radiantcms.org/).

Contributors
------------

* [Jon Kinney](http://jonkinney.com/)

Installation
------------

Run this `rake` command to copy all needed files into the public folder:

	rake radiant:extensions:ck_editor_filter:update

That's it! You should now have "CKEditor" in the filters dropdown on the page edit screen.
Selecting this will spawn a CKEditor instance.

Update
------

Run this `rake` command to update all files in public folder:

    rake radiant:extensions:ck_editor_filter:update

Interaction with other extensions
---------------------------------

The preview button has been overwritten to use the [radiant preview extension](https://github.com/jomz/radiant-page-preview-extension) if it is available.
An extra button is added that triggers the [paperclipped](https://github.com/jomz/paperclipped) assets bucket if it is available.

License
-------

This extension is released under the MIT license, see the [LICENSE](master/LICENSE) for more
information. CKEditor itself is released under the terms of any of the following licenses at your
choice. Please see the [LICENSE.html](master/public/ckeditor/LICENSE.HTML) enclosed with CKEditor.

- GNU General Public License Version 2 or later (the "GPL")
  http://www.gnu.org/licenses/gpl.html
- GNU Lesser General Public License Version 2.1 or later (the "LGPL")
  http://www.gnu.org/licenses/lgpl.html
- Mozilla Public License Version 1.1 or later (the "MPL")
  http://www.mozilla.org/MPL/MPL-1.1.html
