
-- Get a team member's level based off points
Select team_member.*, MAX(level.Name) AS Level
FROM team_member
         JOIN level ON team_member.points >= level.Points
GROUP BY team_member.email;

-- After Completing a Duty
----------------------------
-- Updates all duty information for a player in duties list table
UPDATE duties_list SET
    CompletedDuties = json_patch(
            CompletedDuties,
            json_object(duties.DutyID || '', json_object('points', duties.Points, 'description', duties.Description, 'last_completed', datetime('now')))
        )
    From team_member, duties
WHERE duties_list.Email = 'abbyquinn@gmail.com' and
    duties.DutyID = 1;

-- Updates the players points in team member table
UPDATE team_member SET
    Points = Points + (SELECT duties.Points
                       FROM duties
                       Where duties.DutyID = 1)
WHERE team_member.Email = 'abbyquinn@gmail.com';

-- Prints the the email and duty information
SELECT duties_list.Email, json_extract(CompletedDuties, '$."' || 1 || '"')
FROM duties_list
WHERE duties_list.Email = 'abbyquinn@gmail.com';

-- Prints the status of the cooldown for task 2
SELECT json_extract(CompletedDuties, '$."' || 1 || '"'),
       json_extract(CompletedDuties, '$."1".last_completed') AS last_completed,
       CASE
           WHEN strftime('%s', 'now') - strftime('%s', json_extract(CompletedDuties, '$."1".last_completed')) < (duties.ResetTime * 60)
               THEN 'Task completed recently'
           ELSE 'Task off cooldown'
           END AS status
FROM duties_list, duties
WHERE duties_list.Email = 'joshfried@gmail.com'
  AND duties.DutyID = 1;


-- Same thing but for task 2
----------------------------
-- Updates all duty information for a player in duties list table
UPDATE duties_list SET
    CompletedDuties = json_patch(
            CompletedDuties,
            json_object(duties.DutyID || '', json_object('points', duties.Points, 'description', duties.Description, 'last_completed', datetime('now')))
        )
    From team_member, duties
WHERE duties_list.Email = 'joshfried@gmail.com' and
    duties.DutyID = 2;

-- Updates the players points in team member table
UPDATE team_member SET
    Points = Points + (SELECT duties.Points
                       FROM duties
                       Where duties.DutyID = 2)
WHERE team_member.Email = 'joshfried@gmail.com';

-- Prints the the email and duty information
SELECT duties_list.Email, json_extract(CompletedDuties, '$."' || 2 || '"')
FROM duties_list
WHERE duties_list.Email = 'joshfried@gmail.com';

-- Prints the status of the cooldown for task 2
SELECT json_extract(CompletedDuties, '$."' || 2 || '"'),
       json_extract(CompletedDuties, '$."2".last_completed') AS last_completed,
       CASE
           WHEN strftime('%s', 'now') - strftime('%s', json_extract(CompletedDuties, '$."2".last_completed')) < (duties.ResetTime * 60)
               THEN 'Task completed recently'
           ELSE 'Task off cooldown'
           END AS status
FROM duties_list, duties
WHERE duties_list.Email = 'joshfried@gmail.com'
  AND duties.DutyID = 2;