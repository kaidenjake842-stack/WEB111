// =========================================================
// ASSET HUB - GITHUB PAGES VERSION
// No backend required
// =========================================================


// =========================================================
// ASSETS
// =========================================================

const assets = [
  {
    id: 1,
    name: "Testing",
    icon: "📜",
    type: "PAID",
    tag: "NEW",
    category: "Scripts",
    description: "TEIDVJNFBFB",
    link: ""
  },

  {
    id: 2,
    name: "Advanced Loading Screen",
    icon: "🔥",
    type: "FREE",
    tag: "POPULAR",
    category: "UI",
    description:
      "Animated progress, status messages, polished effects, and a clean loading flow.",
    link: "https://example.com/advanced-loading-screen"
  },

  {
    id: 3,
    name: "Overhead Nametag System",
    icon: "🏷️",
    type: "FREE",
    tag: "FEATURED",
    category: "Systems",
    description:
      "Ranks, titles, gradients, icons, and configurable overhead display.",
    link: "https://example.com/overhead-system"
  },

  {
    id: 4,
    name: "Gamepass Shop UI",
    icon: "🛒",
    type: "PAID",
    tag: "NEW",
    category: "UI",
    description:
      "Responsive storefront with categories, product cards, and clean animations.",
    link: "https://example.com/gamepass-shop"
  },

  {
    id: 5,
    name: "Trail & Halo System",
    icon: "✨",
    type: "PAID",
    tag: "POPULAR",
    category: "Systems",
    description:
      "Equipables, multipliers, unlock requirements, and progression support.",
    link: "https://example.com/trail-halo"
  },

  {
    id: 6,
    name: "Admin Event Panel",
    icon: "⚡",
    type: "PAID",
    tag: "EXCLUSIVE",
    category: "Systems",
    description:
      "Run server events, announcements, and controls from one polished panel.",
    link: "https://example.com/admin-event-panel"
  }
];


// =========================================================
// UPDATE LOG
// =========================================================

const updates = [
  {
    version: "v1.2.0",
    tag: "FIXED",
    pinned: true,

    title: "Coming Soon Countdowns",

    description:
      "Added live countdowns for upcoming Asset Hub releases.",

    changes: [
      "Added Coming Soon countdown cards",
      "Countdowns update automatically",
      "Added released status when timers reach zero",
      "Kept Theme Customization",
      "Improved GitHub Pages compatibility"
    ]
  },

  {
    version: "v1.0.0",
    tag: "NEW",
    pinned: false,

    title: "Theme Customization",

    description:
      "Customize Asset Hub with appearance settings.",

    changes: [
      "Dark, Midnight, and Light themes",
      "Custom accent colors",
      "Glow and animation controls"
    ]
  }
];


// =========================================================
// LEARNING CENTER
// =========================================================

const lessons = [
  {
    id: "remotes",

    title: "Understanding RemoteEvents",

    category: "Roblox Scripting",

    difficulty: "Beginner",

    minutes: 6,

    summary:
      "Learn how LocalScripts and server Scripts communicate safely.",

    content:
      "RemoteEvents let a LocalScript communicate with a server Script. Store shared RemoteEvents in ReplicatedStorage so both sides can access them.\n\nUse FireServer from the client and OnServerEvent on the server. Validate important information on the server.",

    code:
      'local ReplicatedStorage = game:GetService("ReplicatedStorage")\nlocal event = ReplicatedStorage:WaitForChild("MyEvent")\n\nevent:FireServer("Hello")'
  },

  {
    id: "datastore",

    title: "DataStore Basics",

    category: "DataStores",

    difficulty: "Intermediate",

    minutes: 8,

    summary:
      "Learn the basic pattern for saving and loading player data.",

    content:
      "DataStoreService stores persistent player information between sessions. DataStore work should happen on the server and calls should be wrapped in pcall.",

    code:
      'local DataStoreService = game:GetService("DataStoreService")\nlocal store = DataStoreService:GetDataStore("PlayerData_V1")'
  },

  {
    id: "ui",

    title: "Building Better Roblox UI",

    category: "UI Design",

    difficulty: "Beginner",

    minutes: 5,

    summary:
      "Improve spacing, hierarchy, readability, and responsive design.",

    content:
      "Use consistent spacing, readable text, clear hierarchy, and UIListLayout or UIGridLayout for repeated content.",

    code: ""
  }
];


// =========================================================
// COMING SOON
// =========================================================

const comingSoonDrops = [
  {
    title: "Inventory System",

    icon: "🎒",

    description:
      "Advanced inventory UI and item management system.",

    releaseAt:
      "2026-08-15T18:00:00-04:00"
  },

  {
    title: "Simulator Starter Pack",

    icon: "⚙️",

    description:
      "A starter collection for simulator-style Roblox games.",

    releaseAt:
      "2026-08-20T18:00:00-04:00"
  },

  {
    title: "Premium UI Collection",

    icon: "💎",

    description:
      "A polished premium interface collection.",

    releaseAt:
      "2026-08-25T18:00:00-04:00"
  }
];


// =========================================================
// ASSET FILTERING
// =========================================================

let activeCategory = "all";

const assetGrid =
  document.getElementById(
    "assetGrid"
  );

const assetCount =
  document.getElementById(
    "assetCount"
  );

const assetSearch =
  document.getElementById(
    "assetSearch"
  );

const categoryFilter =
  document.getElementById(
    "categoryFilter"
  );

const typeFilter =
  document.getElementById(
    "typeFilter"
  );


// =========================================================
// RENDER ASSETS
// =========================================================

function renderAssets() {

  const query =
    (assetSearch?.value || "")
      .trim()
      .toLowerCase();


  const category =
    activeCategory !== "all"
      ? activeCategory
      : (
          categoryFilter?.value ||
          "all"
        );


  const type =
    typeFilter?.value ||
    "all";


  const filtered =
    assets.filter(asset => {

      const searchText = `
        ${asset.name}
        ${asset.description}
        ${asset.category}
        ${asset.type}
        ${asset.tag || ""}
      `.toLowerCase();


      return (

        searchText.includes(
          query
        )

        &&

        (
          category === "all" ||
          asset.category ===
            category
        )

        &&

        (
          type === "all" ||
          asset.type ===
            type
        )

      );

    });


  // =====================================================
  // ASSET COUNT
  // =====================================================

  if (assetCount) {

    assetCount.textContent =
      `${filtered.length} asset${
        filtered.length === 1
          ? ""
          : "s"
      } found`;

  }


  if (!assetGrid) {
    return;
  }


  // =====================================================
  // NO ASSETS
  // =====================================================

  if (
    filtered.length === 0
  ) {

    assetGrid.innerHTML = `

      <article
        class="asset-card"
        style="grid-column:1/-1"
      >

        <div
          class="asset-body"
          style="
            text-align:center;
            padding:36px;
          "
        >

          <h3>
            No assets found
          </h3>


          <p>
            Try another search
            or filter.
          </p>

        </div>

      </article>

    `;


    return;
  }


  // =====================================================
  // CREATE ASSET CARDS
  // =====================================================

  assetGrid.innerHTML =
    filtered
      .map(asset => {

        const typeClass =
          asset.type === "FREE"
            ? "free"
            : "premium";


        const tagHTML =
          asset.tag

            ? `

              <span
                class="
                  pill
                  ${asset.tag.toLowerCase()}
                "
              >
                ${asset.tag}
              </span>

            `

            : "";


        return `

          <article
            class="asset-card"
          >

            <div
              class="asset-art"
            >
              ${asset.icon || "📦"}
            </div>


            <div
              class="asset-body"
            >

              <div
                class="asset-meta"
              >

                <div
                  class="badge-row"
                >


                  <span
                    class="
                      pill
                      ${typeClass}
                    "
                  >
                    ${asset.type}
                  </span>


                  ${tagHTML}


                  <span
                    class="pill"
                  >
                    ${asset.category}
                  </span>


                </div>

              </div>


              <h3>
                ${asset.name}
              </h3>


              <p>
                ${asset.description}
              </p>


              <div
                class="asset-footer"
              >

                <span
                  class="pill"
                >
                  Asset Hub
                </span>


                <button
                  class="small-button"
                  type="button"
                  onclick="
                    openAsset(
                      ${asset.id}
                    )
                  "
                >
                  View Asset →
                </button>


              </div>

            </div>

          </article>

        `;

      })
      .join("");

}


// =========================================================
// OPEN ASSET MODAL
// =========================================================

function openAsset(id) {

  const asset =
    assets.find(
      item =>
        item.id === id
    );


  if (!asset) {
    return;
  }


  const modal =
    document.getElementById(
      "assetModal"
    );


  if (!modal) {

    console.error(
      "Asset modal not found."
    );

    return;
  }


  const modalIcon =
    document.getElementById(
      "assetModalIcon"
    );


  const modalTitle =
    document.getElementById(
      "assetModalTitle"
    );


  const modalDescription =
    document.getElementById(
      "assetModalDescription"
    );


  const modalCategory =
    document.getElementById(
      "assetModalCategory"
    );


  const modalType =
    document.getElementById(
      "assetModalType"
    );


  const modalBadges =
    document.getElementById(
      "assetModalBadges"
    );


  const assetButton =
    document.getElementById(
      "assetGetButton"
    );


  // ICON

  if (modalIcon) {

    modalIcon.textContent =
      asset.icon || "📦";

  }


  // TITLE

  if (modalTitle) {

    modalTitle.textContent =
      asset.name;

  }


  // DESCRIPTION

  if (modalDescription) {

    modalDescription.textContent =
      asset.description;

  }


  // CATEGORY

  if (modalCategory) {

    modalCategory.textContent =
      asset.category;

  }


  // TYPE

  if (modalType) {

    modalType.textContent =
      asset.type;

  }


  // =====================================================
  // MODAL BADGES
  // =====================================================

  if (modalBadges) {

    const typeClass =
      asset.type === "FREE"
        ? "free"
        : "premium";


    const tagHTML =
      asset.tag

        ? `

          <span
            class="
              pill
              ${asset.tag.toLowerCase()}
            "
          >
            ${asset.tag}
          </span>

        `

        : "";


    modalBadges.innerHTML = `

      <span
        class="
          pill
          ${typeClass}
        "
      >
        ${asset.type}
      </span>


      ${tagHTML}


      <span
        class="pill"
      >
        ${asset.category}
      </span>

    `;

  }


  // =====================================================
  // GET ASSET BUTTON
  // =====================================================

  if (assetButton) {

    assetButton.href =
      asset.link || "#";


    assetButton.textContent =
      "Get Asset";


    assetButton.onclick =
      null;

  }


  // =====================================================
  // SHOW MODAL
  // =====================================================

  modal.classList.remove(
    "hidden"
  );


  document.body.style.overflow =
    "hidden";

}


window.openAsset =
  openAsset;


// =========================================================
// CLOSE ASSET MODAL
// =========================================================

function closeAssetModal() {

  const modal =
    document.getElementById(
      "assetModal"
    );


  if (!modal) {
    return;
  }


  modal.classList.add(
    "hidden"
  );


  document.body.style.overflow =
    "";

}


window.closeAssetModal =
  closeAssetModal;


// =========================================================
// ASSET MODAL X BUTTON
// =========================================================

document
  .getElementById(
    "closeAssetModal"
  )
  ?.addEventListener(
    "click",
    closeAssetModal
  );


// =========================================================
// CLICK OUTSIDE MODAL
// =========================================================

document
  .getElementById(
    "assetModal"
  )
  ?.addEventListener(
    "click",
    function(event) {

      if (
        event.target === this
      ) {

        closeAssetModal();

      }

    }
  );


// =========================================================
// SEARCH
// =========================================================

assetSearch
  ?.addEventListener(
    "input",
    renderAssets
  );


// =========================================================
// TYPE FILTER
// =========================================================

typeFilter
  ?.addEventListener(
    "change",
    renderAssets
  );


// =========================================================
// CATEGORY DROPDOWN
// =========================================================

categoryFilter
  ?.addEventListener(
    "change",
    () => {

      activeCategory =
        "all";


      document
        .querySelectorAll(
          ".category-card"
        )
        .forEach(card => {

          card.classList.remove(
            "active"
          );

        });


      renderAssets();

    }
  );


// =========================================================
// CATEGORY CARDS
// =========================================================

document
  .querySelectorAll(
    ".category-card"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        activeCategory =
          button.dataset.category ||
          "all";


        if (categoryFilter) {

          categoryFilter.value =
            activeCategory;

        }


        document
          .querySelectorAll(
            ".category-card"
          )
          .forEach(card => {

            card.classList.remove(
              "active"
            );

          });


        button.classList.add(
          "active"
        );


        document
          .getElementById(
            "assets"
          )
          ?.scrollIntoView({

            behavior:
              "smooth"

          });


        renderAssets();

      }
    );

  });


// =========================================================
// GENERIC MODAL CLOSE
// =========================================================

function closeModal(id) {

  const modal =
    document.getElementById(
      id
    );


  if (!modal) {
    return;
  }


  modal.classList.add(
    "hidden"
  );


  document.body.style.overflow =
    "";

}


// =========================================================
// COUNTDOWN HELPERS
// =========================================================

function getCountdown(
  targetTime
) {

  const difference =
    Math.max(
      0,
      targetTime -
        Date.now()
    );


  return {

    released:
      difference <= 0,


    days:
      Math.floor(
        difference /
        86400000
      ),


    hours:
      Math.floor(
        (
          difference %
          86400000
        ) /
        3600000
      ),


    minutes:
      Math.floor(
        (
          difference %
          3600000
        ) /
        60000
      ),


    seconds:
      Math.floor(
        (
          difference %
          60000
        ) /
        1000
      )

  };

}


// =========================================================
// RENDER COUNTDOWNS
// =========================================================

function renderCountdowns() {

  const grid =
    document.getElementById(
      "countdownGrid"
    );


  if (!grid) {
    return;
  }


  grid.innerHTML =
    comingSoonDrops
      .map(drop => {

        const targetTime =
          new Date(
            drop.releaseAt
          ).getTime();


        const time =
          getCountdown(
            targetTime
          );


        return `

          <article
            class="countdown-card"
          >

            <div
              class="countdown-icon"
            >
              ${drop.icon}
            </div>


            <span
              class="pill"
            >
              COMING SOON
            </span>


            <h3>
              ${drop.title}
            </h3>


            <p>
              ${drop.description}
            </p>


            ${
              time.released

                ? `

                  <div
                    class="released"
                  >
                    ✓ RELEASED
                  </div>

                `

                : `

                  <div
                    class="
                      countdown-timer
                    "
                  >


                    <div
                      class="
                        countdown-unit
                      "
                    >

                      <strong>
                        ${time.days}
                      </strong>

                      <span>
                        DAYS
                      </span>

                    </div>


                    <div
                      class="
                        countdown-unit
                      "
                    >

                      <strong>

                        ${
                          String(
                            time.hours
                          )
                            .padStart(
                              2,
                              "0"
                            )
                        }

                      </strong>

                      <span>
                        HOURS
                      </span>

                    </div>


                    <div
                      class="
                        countdown-unit
                      "
                    >

                      <strong>

                        ${
                          String(
                            time.minutes
                          )
                            .padStart(
                              2,
                              "0"
                            )
                        }

                      </strong>

                      <span>
                        MIN
                      </span>

                    </div>


                    <div
                      class="
                        countdown-unit
                      "
                    >

                      <strong>

                        ${
                          String(
                            time.seconds
                          )
                            .padStart(
                              2,
                              "0"
                            )
                        }

                      </strong>

                      <span>
                        SEC
                      </span>

                    </div>


                  </div>

                `
            }


          </article>

        `;

      })
      .join("");

}


// =========================================================
// UPDATE LOG
// =========================================================

function renderUpdates() {

  const updatesList =
    document.getElementById(
      "updatesList"
    );


  if (!updatesList) {

    console.warn(
      "Could not find #updatesList"
    );

    return;
  }


  updatesList.innerHTML =
    updates
      .map(update => {

        return `

          <article
            class="
              update-card
              ${
                update.pinned
                  ? "pinned"
                  : ""
              }
            "
          >

            <div
              class="update-top"
            >

              <div>

                <small>

                  ${update.version}

                  •

                  ${update.tag}

                  ${
                    update.pinned
                      ? " • PINNED"
                      : ""
                  }

                </small>


                <h3>
                  ${update.title}
                </h3>

              </div>


              <span
                class="pill"
              >
                ${update.tag}
              </span>

            </div>


            <p>
              ${update.description}
            </p>


            <div
              class="change-list"
            >

              ${
                update.changes
                  .map(
                    change => `

                      <div>
                        • ${change}
                      </div>

                    `
                  )
                  .join("")
              }

            </div>


          </article>

        `;

      })
      .join("");

}


// =========================================================
// LEARNING CENTER ELEMENTS
// =========================================================

const lessonSearch =
  document.getElementById(
    "lessonSearch"
  );


const lessonCategoryFilter =
  document.getElementById(
    "lessonCategoryFilter"
  );


// =========================================================
// RENDER LESSONS
// =========================================================

function renderLessons() {

  const grid =
    document.getElementById(
      "lessonGrid"
    );


  if (!grid) {
    return;
  }


  const query =
    (
      lessonSearch?.value ||
      ""
    )
      .trim()
      .toLowerCase();


  const category =
    lessonCategoryFilter?.value ||
    "all";


  const filtered =
    lessons.filter(lesson => {

      const searchText = `
        ${lesson.title}
        ${lesson.summary}
        ${lesson.category}
        ${lesson.difficulty}
      `.toLowerCase();


      return (

        searchText.includes(
          query
        )

        &&

        (
          category === "all" ||
          lesson.category ===
            category
        )

      );

    });


  grid.innerHTML =
    filtered
      .map(lesson => {

        return `

          <article
            class="lesson-card"
          >

            <div
              class="lesson-meta"
            >

              <span>
                ${lesson.category}
              </span>

              <span>
                ${lesson.minutes} min
              </span>

            </div>


            <h3>
              ${lesson.title}
            </h3>


            <p>
              ${lesson.summary}
            </p>


            <div
              class="lesson-footer"
            >

              <span
                class="pill"
              >

                ${
                  lesson.difficulty
                    .toUpperCase()
                }

              </span>


              <button
                class="small-button"
                type="button"
                onclick="
                  openLesson(
                    '${lesson.id}'
                  )
                "
              >

                Start Lesson →

              </button>


            </div>


          </article>

        `;

      })
      .join("");

}


// =========================================================
// OPEN LESSON
// =========================================================

function openLesson(id) {

  const lesson =
    lessons.find(
      item =>
        item.id === id
    );


  if (!lesson) {
    return;
  }


  const modal =
    document.getElementById(
      "lessonModal"
    );


  if (!modal) {
    return;
  }


  const meta =
    document.getElementById(
      "lessonModalMeta"
    );


  const title =
    document.getElementById(
      "lessonModalTitle"
    );


  const summary =
    document.getElementById(
      "lessonModalSummary"
    );


  const content =
    document.getElementById(
      "lessonModalContent"
    );


  const code =
    document.getElementById(
      "lessonModalCode"
    );


  const codeBlock =
    document.getElementById(
      "lessonCodeBlock"
    );


  if (meta) {

    meta.innerHTML = `

      <span
        class="pill"
      >
        ${lesson.category}
      </span>


      <span
        class="pill"
      >
        ${lesson.difficulty}
      </span>


      <span
        class="pill"
      >
        ${lesson.minutes} MIN
      </span>

    `;

  }


  if (title) {

    title.textContent =
      lesson.title;

  }


  if (summary) {

    summary.textContent =
      lesson.summary;

  }


  if (content) {

    content.textContent =
      lesson.content;

  }


  if (code) {

    code.textContent =
      lesson.code;

  }


  if (codeBlock) {

    codeBlock.classList.toggle(
      "hidden",
      !lesson.code
    );

  }


  modal.classList.remove(
    "hidden"
  );


  document.body.style.overflow =
    "hidden";

}


window.openLesson =
  openLesson;


// =========================================================
// LESSON FILTERS
// =========================================================

lessonSearch
  ?.addEventListener(
    "input",
    renderLessons
  );


lessonCategoryFilter
  ?.addEventListener(
    "change",
    renderLessons
  );


// =========================================================
// CLOSE LESSON MODAL
// =========================================================

document
  .getElementById(
    "closeLessonModal"
  )
  ?.addEventListener(
    "click",
    () => {

      closeModal(
        "lessonModal"
      );

    }
  );


document
  .getElementById(
    "lessonModal"
  )
  ?.addEventListener(
    "click",
    function(event) {

      if (
        event.target === this
      ) {

        closeModal(
          "lessonModal"
        );

      }

    }
  );


// =========================================================
// COPY LESSON CODE
// =========================================================

document
  .getElementById(
    "copyLessonCode"
  )
  ?.addEventListener(
    "click",
    async () => {

      const code =
        document.getElementById(
          "lessonModalCode"
        )
        ?.textContent ||
        "";


      try {

        await navigator
          .clipboard
          .writeText(
            code
          );


        const button =
          document.getElementById(
            "copyLessonCode"
          );


        if (!button) {
          return;
        }


        const oldText =
          button.textContent;


        button.textContent =
          "Copied!";


        setTimeout(
          () => {

            button.textContent =
              oldText;

          },
          1200
        );

      } catch {

        alert(
          "Copy failed. Select the code manually."
        );

      }

    }
  );


// =========================================================
// THEME CUSTOMIZATION
// =========================================================

const THEME_KEY =
  "assetHubThemeSettings";


const defaultTheme = {

  theme:
    "dark",

  accent:
    "#53d6ff",

  glow:
    true,

  animations:
    true

};


// =========================================================
// LOAD THEME
// =========================================================

function loadTheme() {

  try {

    const saved =
      JSON.parse(
        localStorage.getItem(
          THEME_KEY
        )
      );


    return {

      ...defaultTheme,

      ...(saved || {})

    };

  } catch {

    return {

      ...defaultTheme

    };

  }

}


let themeSettings =
  loadTheme();


// =========================================================
// SAVE THEME
// =========================================================

function saveTheme() {

  try {

    localStorage.setItem(

      THEME_KEY,

      JSON.stringify(
        themeSettings
      )

    );

  } catch (error) {

    console.warn(
      "Theme could not be saved.",
      error
    );

  }

}


// =========================================================
// SECONDARY ACCENT
// =========================================================

function makeSecondaryAccent(
  hex
) {

  const raw =
    hex.replace(
      "#",
      ""
    );


  if (
    raw.length !== 6
  ) {

    return "#7768ff";

  }


  const r =
    parseInt(
      raw.slice(
        0,
        2
      ),
      16
    );


  const g =
    parseInt(
      raw.slice(
        2,
        4
      ),
      16
    );


  const b =
    parseInt(
      raw.slice(
        4,
        6
      ),
      16
    );


  return `rgb(
    ${
      Math.min(
        255,
        Math.round(
          r * 0.72 + 70
        )
      )
    },
    ${
      Math.min(
        255,
        Math.round(
          g * 0.72 + 40
        )
      )
    },
    ${
      Math.min(
        255,
        Math.round(
          b * 0.72 + 95
        )
      )
    }
  )`;

}


// =========================================================
// APPLY THEME
// =========================================================

function applyTheme() {

  document.body
    .classList.remove(

      "theme-dark",

      "theme-midnight",

      "theme-light",

      "glow-off",

      "animations-off"

    );


  document.body
    .classList.add(

      `theme-${themeSettings.theme}`

    );


  if (
    !themeSettings.glow
  ) {

    document.body
      .classList.add(
        "glow-off"
      );

  }


  if (
    !themeSettings.animations
  ) {

    document.body
      .classList.add(
        "animations-off"
      );

  }


  document
    .documentElement
    .style
    .setProperty(

      "--primary",

      themeSettings.accent

    );


  document
    .documentElement
    .style
    .setProperty(

      "--primary2",

      makeSecondaryAccent(
        themeSettings.accent
      )

    );


  const picker =
    document.getElementById(
      "customAccent"
    );


  const glow =
    document.getElementById(
      "glowToggle"
    );


  const animations =
    document.getElementById(
      "animationToggle"
    );


  if (picker) {

    picker.value =
      themeSettings.accent;

  }


  if (glow) {

    glow.checked =
      themeSettings.glow;

  }


  if (animations) {

    animations.checked =
      themeSettings.animations;

  }


  document
    .querySelectorAll(
      ".theme-choice"
    )
    .forEach(button => {

      button
        .classList
        .toggle(

          "active",

          button.dataset.theme ===
            themeSettings.theme

        );

    });


  document
    .querySelectorAll(
      ".accent-dot"
    )
    .forEach(button => {

      const color =
        button.dataset.accent ||
        "";


      button
        .classList
        .toggle(

          "active",

          color
            .toLowerCase() ===

            themeSettings
              .accent
              .toLowerCase()

        );

    });

}


// =========================================================
// OPEN THEME PANEL
// =========================================================

function openThemePanel() {

  document
    .getElementById(
      "themePanel"
    )
    ?.classList.add(
      "open"
    );


  document
    .getElementById(
      "themeOverlay"
    )
    ?.classList.remove(
      "hidden"
    );


  document.body.style.overflow =
    "hidden";

}


// =========================================================
// CLOSE THEME PANEL
// =========================================================

function closeThemePanel() {

  document
    .getElementById(
      "themePanel"
    )
    ?.classList.remove(
      "open"
    );


  document
    .getElementById(
      "themeOverlay"
    )
    ?.classList.add(
      "hidden"
    );


  document.body.style.overflow =
    "";

}


// =========================================================
// THEME BUTTONS
// =========================================================

document
  .getElementById(
    "openThemePanel"
  )
  ?.addEventListener(
    "click",
    openThemePanel
  );


document
  .getElementById(
    "closeThemePanel"
  )
  ?.addEventListener(
    "click",
    closeThemePanel
  );


document
  .getElementById(
    "themeOverlay"
  )
  ?.addEventListener(
    "click",
    closeThemePanel
  );


// =========================================================
// THEME OPTIONS
// =========================================================

document
  .querySelectorAll(
    ".theme-choice"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        themeSettings.theme =
          button.dataset.theme;


        applyTheme();

        saveTheme();

      }
    );

  });


// =========================================================
// ACCENT OPTIONS
// =========================================================

document
  .querySelectorAll(
    ".accent-dot"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        themeSettings.accent =
          button.dataset.accent;


        applyTheme();

        saveTheme();

      }
    );

  });


// =========================================================
// CUSTOM ACCENT
// =========================================================

document
  .getElementById(
    "customAccent"
  )
  ?.addEventListener(
    "input",
    event => {

      themeSettings.accent =
        event.target.value;


      applyTheme();

      saveTheme();

    }
  );


// =========================================================
// GLOW
// =========================================================

document
  .getElementById(
    "glowToggle"
  )
  ?.addEventListener(
    "change",
    event => {

      themeSettings.glow =
        event.target.checked;


      applyTheme();

      saveTheme();

    }
  );


// =========================================================
// ANIMATIONS
// =========================================================

document
  .getElementById(
    "animationToggle"
  )
  ?.addEventListener(
    "change",
    event => {

      themeSettings.animations =
        event.target.checked;


      applyTheme();

      saveTheme();

    }
  );


// =========================================================
// RESET THEME
// =========================================================

document
  .getElementById(
    "resetThemeButton"
  )
  ?.addEventListener(
    "click",
    () => {

      themeSettings = {

        ...defaultTheme

      };


      applyTheme();

      saveTheme();

    }
  );


// =========================================================
// ESCAPE KEY
// =========================================================

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key !==
      "Escape"
    ) {

      return;

    }


    closeThemePanel();

    closeAssetModal();

    closeModal(
      "lessonModal"
    );

  }
);


// =========================================================
// START ASSET HUB
// =========================================================

applyTheme();

renderAssets();

renderCountdowns();

renderUpdates();

renderLessons();


// Countdown updates every second

setInterval(
  renderCountdowns,
  1000
);