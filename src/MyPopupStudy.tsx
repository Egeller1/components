import "./popup.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const MyPopupStudy = () => {
  return (
    <div className="popup-container">
      <header className="popup-header">
        <h1>Designing an Accessible Popup Dialog</h1>
        <p>Project by Efram Geller</p>
        <p>
          This case study explores how cookie-consent popups are commonly
          implemented on various websites—and how they can fail users. My goal
          is to analyze these popups’ accessibility (with a focus on keyboard
          interactions) and propose a redesigned solution that is more
          inclusive. By examining real-world examples and mapping out the user
          interactions, we will discover the main pitfalls and see how to fix
          them.
        </p>
      </header>

      {/* PART 1 */}
      <section id="input-analysis" className="section">
        <h2 className="section-title">Part 1: Identifying the Popups</h2>
        <p>
          To begin, I selected three cookie-consent popups from popular or
          recognizable sites: McDonald’s, the University of the Arts London
          (UAL), and Moovly. Although each popup aims to alert users about
          privacy and data collection, they differ significantly in appearance
          and behavior. In particular, I wanted to see how easily and accessible
          the popups are to use and how they responded to different user
          interactions.
        </p>
        <p>Below are the three popups:</p>

        <div className="popup-text">McDonald’s Popup</div>
        <div className="image-text-container">
          <img
            className="image-placeholder"
            src="/images/MCD.png"
            alt="McDonald's cookie-consent popup"
          />
        </div>

        <div className="popup-text">
          University of the Arts London (UAL) Popup
        </div>
        <div className="image-text-container">
          <img
            className="image-placeholder"
            src="/images/UAL.png"
            alt="UAL cookie-consent popup"
          />
        </div>

        <div className="popup-text">Moovly Popup</div>
        <div className="image-text-container">
          <img
            className="image-placeholder"
            src="/images/moovly.png"
            alt="Moovly cookie-consent popup"
          />
        </div>
      </section>

      {/* PART 2 */}
      <section id="output-analysis" className="section">
        <h2 className="section-title">Part 2: Input and Output Analysis</h2>
        <p>
          In this phase, I examined how each popup behaves across three input
          methods: <strong>mouse</strong>, <strong>keyboard</strong>, and{" "}
          <strong>touch</strong>. I also looked at the output—or visual
          feedback—these popups provide when interacted with. This analysis
          revealed several critical accessibility gaps, especially for keyboard
          users who rely on <strong>Tab</strong> navigation.
        </p>
        <p>
          The tables below summarize how each site handles user inputs and the
          visual or audio feedback (outputs) that occur when a user interacts
          with the popup.
        </p>

        <div className="tables-container">
          <div className="table-wrapper">
            <h3>Inputs</h3>
            <p>How users interact via different devices:</p>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>App</th>
                  <th>Mouse</th>
                  <th>Keyboard</th>
                  <th>Touch</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>McDonalds</td>
                  <td>
                    <li>User can highlight and copy text from the popup</li>
                    <li>Clicking accept with mouse allows cookies</li>
                    <li>
                      If user accidentally scrolls at all, popup goes away
                    </li>
                    <li>User can easily evade popup through scrolling</li>
                    <li>Familiar popup similar to most privacy modals</li>
                  </td>
                  <td>
                    <li>
                      Not accessible, not able to access privacy action through
                      "tab"
                    </li>
                    <li>
                      Pressing "up/down" scrolled through the site and ignored
                      the popup
                    </li>
                  </td>
                  <td>
                    <li>Easy to use</li>
                    <li>Can hold down on any button</li>
                    <li>Press on accept button to accept cookies</li>
                    <li>
                      Noticable and efficient, popup takes up most of the screen
                    </li>
                  </td>
                </tr>
                <tr>
                  <td>UAL</td>
                  <td>Hover effects present</td>
                  <td>Limited navigation</td>
                  <td>Some touch limitations</td>
                </tr>
                <tr>
                  <td>Moovly</td>
                  <td>Complete mouse interaction</td>
                  <td>Not accessible</td>
                  <td>Touch-friendly design</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-wrapper">
            <h3>Outputs</h3>
            <p>Visual feedback for each interaction:</p>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>App</th>
                  <th>Color Change</th>
                  <th>Using VoiceOver (Mac)</th>
                  <th>Animations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>McDonalds</td>
                  <td>Buttons change to grey when hovered over</td>
                  <td>
                    <li>
                      Buttons are only accessible via keyboard when VoiceOver is
                      activated
                    </li>
                    <li>
                      Navigating with "tab" has voice over announce text on
                      buttons
                    </li>
                    <li>
                      Navigating with "tab" adds a border around button when
                      hovered over
                    </li>
                  </td>
                  <td>Buttons invert when pressed</td>
                </tr>
                <tr>
                  <td>UAL</td>
                  <td>
                    Thin blue border appears around buttons when hovered over
                  </td>
                  <td>Same accessibilty and VoiceOver usage as McDonalds</td>
                  <td>
                    Nothing, button doesn't invert or change texture at all
                  </td>
                </tr>
                <tr>
                  <td>Moovly</td>
                  <td>None</td>
                  <td>
                    Even with VoiceOver, no possible way to "tab" to privacy
                    button. Site is unnaccesible to keyboard/VoiceOver users
                  </td>
                  <td>
                    Minimal, the "Accept" button shows no state changes at all.
                    The other buttons,which are less used, only removes the text
                    underline when hovered over
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p style={{ fontSize: "40px", marginTop: "100px" }}>
          Woah, look at that! The privacy popup is
          <strong> Completely Unusable</strong> for keyboard users!
        </p>
      </section>

      {/* PART 3 */}
      <section id="state-models" className="section">
        <h2 className="section-title">
          <ArrowDownwardIcon sx={{ color: "#dddddd", fontSize: 30 }} />
          Part 3: State Models & In-Depth Keyboard Problem
          <ArrowDownwardIcon sx={{ color: "#dddddd", fontSize: 30 }} />
        </h2>
        <p>
          From the input/output analysis, a recurring problem emerged:
          <strong>
            {" "}
            keyboard users could not reliably access or close the popup
          </strong>
          . To understand this issue more concretely, I created state diagrams
          that map how a user navigates each popup with both mouse and keyboard.
        </p>
        <p>
          As shown below, certain popups form a “loop” for keyboard users:
          pressing Tab never shifts focus inside the modal, effectively locking
          them out. Let’s examine the original state model and then see how a
          revised design fixes these pain points.
        </p>

        <div className="state-models-container">
          <div className="state-model">
            <h3>Original User State Model</h3>
            <img
              className="state-image-placeholder"
              src="/images/states.png"
              alt="State diagram showing inaccessible keyboard states"
            />
            <p className="annotation">
              This diagram illustrates how hover, active, and selected states
              occur for mouse users, but keyboard users cannot effectively
              navigate or select any popup elements.
            </p>
          </div>
        </div>

        <div className="redesign">
          <h3>Revised Popup Design</h3>
          <img
            className="state-image-placeholder"
            src="/images/revised.png"
            alt="Revised state diagram with keyboard accessibility"
          />
          <div className="state-explanation">Key Improvements:</div>
          <div className="annotation">
            <ul>
              <li className="bullet-style">
                <strong>Focus Management:</strong> Pressing <strong>Tab</strong>{" "}
                moves focus directly into the popup, highlighting the first
                actionable element (e.g., “Accept”). Users can then move between
                buttons with <strong>Tab</strong> or <strong>Shift+Tab</strong>.
              </li>
              <li className="bullet-style">
                <strong>Consistent Hover & Focus States:</strong> Hovering over
                a button or focusing it with the keyboard now produces a clear
                visual change. The state changes were only slightly noticeable
                so I made the visual changes more clear for someone with a
                visual disability
              </li>

              <li className="bullet-style">
                <strong>Intentional Dismissal:</strong> The popup no longer
                disappears on accidental clicks outside. Instead, users must
                explicitly close or accept, preventing confusion.
              </li>
              <li className="bullet-style">
                These changes align with <strong>WCAG guidelines</strong> by
                ensuring full keyboard navigation and robust visual feedback for
                users with varying abilities.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PART 4 */}
      <section id="redesign" className="section">
        <h2 className="section-title">Part 4: Redesigning Moovly’s Popup</h2>
        <p>
          Among the three examples, Moovly’s popup was the least accessible to
          keyboard users. In this redesign, I introduce a clear “focus ring”
          when the user presses <strong>Tab</strong> to select the privacy
          options. Additionally, the layout is more visually distinct, making
          the popup’s buttons obvious.
        </p>
        <p>
          Below are screenshots showing how the popup looks in two different
          “states” of keyboard navigation:
        </p>

        <p className="state-explanation">State One: Initial Focus</p>
        <img
          className="image-component"
          src="/images/component1.png"
          alt="Redesigned Moovly popup with focus ring on first button"
        />

        <p className="state-explanation">State Two: Tabbing to Next Option</p>
        <img
          className="image-component"
          src="/images/component2.png"
          alt="Redesigned Moovly popup with focus ring on second button"
        />
      </section>

      {/* PART 5 */}
      <section id="reflection" className="section">
        <h2 className="section-title">Part 5: Conclusion & Final Thoughts</h2>
        <ul className="reflection-list">
          <li className="bullet-style">
            <strong>Keyboard Access is Essential:</strong> Many popups are
            designed with mouse or touch in mind, but fail to address the
            critical need for keyboard navigation. Ensuring Tab focus within
            popup dialogs is a fundamental step toward inclusive design.
          </li>
          <li className="bullet-style">
            <strong>Clear Visual Feedback:</strong> Users with mild visual
            impairments or those relying on screen readers benefit from distinct
            hover/focus states. Even a small outline or color change can greatly
            improve usability.
          </li>
          <li className="bullet-style">
            <strong>Intentional Interaction:</strong> Popups should not vanish
            without clear user action. Accidental dismissals undermine the
            purpose of consent and create frustration.
          </li>
          <li className="bullet-style">
            <strong>Balance Across Inputs:</strong> While mouse and touch
            interactions often get priority, designing with keyboard and
            assistive technologies in mind leads to more flexible, robust
            interfaces for everyone.
          </li>
          <li className="bullet-style">
            <strong>Privacy Popups Matter:</strong> Though they seem minor,
            cookie-consent popups are often the first interaction a user has
            with a site. Making them accessible ensures a more welcoming,
            user-friendly experience right from the start.
          </li>
        </ul>
      </section>

      <footer className="popup-footer">
        <p>&copy; 2025 Efram Geller - Accessible Components Case Study</p>
      </footer>
    </div>
  );
};

export default MyPopupStudy;
