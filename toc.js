// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introduction.html">Introduction</a></li><li class="chapter-item expanded "><a href="ch1-linux.html"><strong aria-hidden="true">1.</strong> What is Linux?</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="ch1.1-linux-installation.html"><strong aria-hidden="true">1.1.</strong> How to Install Linux</a></li><li class="chapter-item "><a href="ch1.2-linux-terminal.html"><strong aria-hidden="true">1.2.</strong> Using the Linux Terminal</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="ch1.2.2-terminal-origins.html"><strong aria-hidden="true">1.2.1.</strong> Origin of the Linux Terminal</a></li></ol></li><li class="chapter-item "><a href="ch1.4-ssh-vscode.html"><strong aria-hidden="true">1.3.</strong> How to Use SSH Through VS Code</a></li><li class="chapter-item "><a href="ch1.3-ssh-turnin.html"><strong aria-hidden="true">1.4.</strong> How to Submit Assignments using SSH</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="ch1.3.1-mobaxterm.html"><strong aria-hidden="true">1.4.1.</strong> How to Submit Assignments using Mobaxterm on Windows</a></li><li class="chapter-item "><a href="ch1.3.2-putty.html"><strong aria-hidden="true">1.4.2.</strong> How to Submit Assignments using PuTTY on Windows</a></li><li class="chapter-item "><a href="ch1.3.3-winscp.html"><strong aria-hidden="true">1.4.3.</strong> How to Submit Assignments using WinSCP on Windows</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="ch2-git.html"><strong aria-hidden="true">2.</strong> What is git?</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="ch2.1-git-installation.html"><strong aria-hidden="true">2.1.</strong> How to Install git</a></li><li class="chapter-item "><a href="ch2.2-create-github-account.html"><strong aria-hidden="true">2.2.</strong> Creating a GitHub Account</a></li><li class="chapter-item "><a href="ch2.3-using-git.html"><strong aria-hidden="true">2.3.</strong> Using git</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="cheat-sheet.html">Cheat Sheet</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
