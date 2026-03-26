import re

files = [
    r'c:\Aymen\medicacom\medicacom-web\src\app\pages\ProjectsPage.tsx',
    r'c:\Aymen\medicacom\medicacom-web\src\app\pages\ExpertisesPage.tsx',
    r'c:\Aymen\medicacom\medicacom-web\src\app\pages\CareersPage.tsx',
    r'c:\Aymen\medicacom\medicacom-web\src\app\pages\AboutPage.tsx',
    r'c:\Aymen\medicacom\medicacom-web\src\app\components\Layout.tsx',
    r'c:\Aymen\medicacom\medicacom-web\src\app\pages\HomePage.tsx',
]

old = 'ease: [0.22, 1, 0.36, 1]'
new = "ease: 'easeOut'"

for f in files:
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    updated = content.replace(old, new)
    with open(f, 'w', encoding='utf-8') as fh:
        fh.write(updated)
    print(f'Fixed: {f}')

print('All done.')
