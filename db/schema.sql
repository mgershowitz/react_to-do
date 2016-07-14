DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks(
task_id SERIAL PRIMARY KEY NOT NULL,
task_name VARCHAR NOT NULL,
task_desc TEXT,
completed BOOLEAN NOT NULL DEFAULT FALSE,
task_start_time TIMESTAMP,
task_stop_time TIMESTAMP,
create_time TIMESTAMP DEFAULT NOW());

CREATE INDEX ON tasks (completed);
CREATE INDEX ON tasks (task_start_time);
CREATE INDEX ON tasks (create_time);
