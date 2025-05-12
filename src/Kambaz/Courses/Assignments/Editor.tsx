export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <b><label htmlFor="wd-name">Assignment Name</label></b><br /><br />
        <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" style={{ width: '300px', height: '150px' }}>
          The assignment is available online Submit a link to the landing page of
          awfeeaw
          fww
          fafefeafwefefewaaefwafewnaefwuaefwuafeulefwlunfneluw
        </textarea>
        <br />
        <table>
          <tr>
            <td align="center" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="center" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
            <select defaultValue="ASSIGNMENTS" id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
            </td>
          </tr>
          <tr>
            <td align="center" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
            <select defaultValue="PERCENTAGE" id="wd-display-grade-as">
                <option value="PERCENTAGE">Percentage</option>
            </select>
            </td>
          </tr>
          <tr>
            <td align="center" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
            <select defaultValue="ONLINE" id="wd-submission-type">
                <option value="ONLINE">Online</option>
            </select>
            </td>
          </tr>
          <tr>
            <td align="left" valign="top" style={{ paddingLeft: '0px' }}>
            Online Entry Options<br/>
            <input type="checkbox" name="check-genre" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>

            <input type="checkbox" name="check-genre" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>

            <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

            <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

            <input type="checkbox" name="check-genre" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <tr>
            <td align="center" valign="top">
              <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
              <input id="wd-assign-to" defaultValue={'Everyone'} />
            </td>
          </tr>
          <tr>
            <td align="center" valign="top">
              <label htmlFor="wd-due-date">Due Date</label>
            </td>
            <td>
            <input type="date"
            defaultValue="2000-01-21"
            id="wd-due-date"/><br/>
            </td>
          </tr>
          <tr>
            <td align="center" valign="top">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
            <input type="date"
            defaultValue="2000-01-21"
            id="wd-available-from"/><br/>
            </td>
            <td align="center" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
            <input type="date"
            defaultValue="2000-01-21"
            id="wd-available-until"/><br/>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
            <button type="button"
                id="wd-cancel"> Cancel</button>
            <button type="button"
                id="wd-save"> Save</button>
            </td>
          </tr>
        </table>
      </div>
  );}
  