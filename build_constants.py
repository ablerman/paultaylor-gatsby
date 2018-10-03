#!/usr/bin/env python
import os
from jinja2 import Template
import click

template_str = '''
const photos = [
    {%- for name in image_names %}
    {
        path: '{{ prefix }}/{{name}}',
        alt: '{{name|replace('.jpg', '')}}'
    }{{ "," if not loop.last }}
    {%- endfor %}
]
export default photos;
'''


def write_to_clipboard(output):
    import subprocess
    process = subprocess.Popen('pbcopy', env={'LANG': 'en_US.UTF-8'}, stdin=subprocess.PIPE)
    process.communicate(output.encode())


@click.command()
@click.option('--path', default='./', help='path to find the images')
@click.option('--prefix', default='', help='prefix to put before the filename')
def main(path, prefix):
    images = os.listdir(path)
    images.sort()
    template = Template(template_str)
    rendered = template.render({'image_names': images, 'prefix': prefix})
    write_to_clipboard(rendered)
    print(rendered)

    # print(images)
    # print('hello world: ', path, ' ', prefix)


if __name__ == '__main__':
    main()
